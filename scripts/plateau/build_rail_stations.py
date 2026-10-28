#!/usr/bin/env python3
# Extract named railway stations from National Land Numerical Information "Railway (N02)" (Shapefile in a zip)
# into a GeoJSON of points, for station labels on the Access page wide map.
#
# Usage:
#   python3 -I scripts/plateau/build_rail_stations.py <N02.zip> <out.geojson> <name> [<name> ...]
#
# Source: National Land Numerical Information "Railway (N02)", MLIT. License: CC BY 4.0.
# Only the Python standard library is used.

import json
import os
import struct
import sys
import zipfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_rail_geojson import read_dbf  # noqa: E402


def read_points(data):
    # Yields one (lng, lat) per record. The N02 station file stores each station as a short polyline (type 3),
    # so the station position is the mean of its vertices.
    pos = 100
    while pos + 8 <= len(data):
        _, content_words = struct.unpack('>ii', data[pos:pos + 8])
        content = data[pos + 8:pos + 8 + content_words * 2]
        pos += 8 + content_words * 2
        shape_type = struct.unpack('<i', content[:4])[0]
        if shape_type == 1:
            x, y = struct.unpack('<dd', content[4:20])
            yield (x, y)
            continue
        if shape_type != 3:
            yield None
            continue
        num_parts, num_points = struct.unpack('<ii', content[36:44])
        points_at = 44 + 4 * num_parts
        values = struct.unpack('<%dd' % (2 * num_points), content[points_at:points_at + 16 * num_points])
        xs = values[0::2]
        ys = values[1::2]
        yield (sum(xs) / len(xs), sum(ys) / len(ys))


def main():
    src, out, *names = sys.argv[1:]
    wanted = set(names)
    with zipfile.ZipFile(src) as z:
        shp = z.read(next(n for n in z.namelist() if n.endswith('Station.shp')))
        dbf = z.read(next(n for n in z.namelist() if n.endswith('Station.dbf')))
    attrs = read_dbf(dbf)
    features = []
    seen = set()
    for record, point in zip(attrs, read_points(shp)):
        name = record.get('N02_005', '')
        if point is None or name not in wanted or name in seen:
            continue
        seen.add(name)
        features.append({
            'type': 'Feature',
            'properties': {'name': name},
            'geometry': {'type': 'Point', 'coordinates': [round(point[0], 6), round(point[1], 6)]},
        })
    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{len(features)} stations -> {out}: ' + ', '.join(f['properties']['name'] for f in features))


if __name__ == '__main__':
    main()
