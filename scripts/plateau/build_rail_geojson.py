#!/usr/bin/env python3
# Convert National Land Numerical Information railway lines (N02, Shapefile in a zip)
# into a GeoJSON limited to a bounding box, for the Access page wide map.
#
# Usage:
#   python3 -I scripts/plateau/build_rail_geojson.py <N02.zip> <out.geojson> <min_lat> <min_lon> <max_lat> <max_lon>
#
# Source: National Land Numerical Information "Railway (N02)", MLIT. License: CC BY 4.0.
# Only the Python standard library is used.

import json
import struct
import sys
import zipfile

SHP = 'RailroadSection.shp'
DBF = 'RailroadSection.dbf'


def read_dbf(data):
    # Returns a list of dicts (field name -> string) for each record.
    count = struct.unpack('<I', data[4:8])[0]
    header_len = struct.unpack('<H', data[8:10])[0]
    record_len = struct.unpack('<H', data[10:12])[0]
    fields = []
    pos = 32
    while data[pos] != 0x0D:
        name = data[pos:pos + 11].split(b'\x00')[0].decode('ascii')
        length = data[pos + 16]
        fields.append((name, length))
        pos += 32
    rows = []
    for i in range(count):
        start = header_len + i * record_len
        offset = start + 1  # skip deletion flag
        row = {}
        for name, length in fields:
            raw = data[offset:offset + length]
            row[name] = raw.decode('cp932', errors='replace').strip()
            offset += length
        rows.append(row)
    return rows


def read_polylines(data):
    # Yields (parts) for each polyline record. Each part is a list of (lng, lat).
    pos = 100
    while pos + 8 <= len(data):
        _, content_words = struct.unpack('>ii', data[pos:pos + 8])
        content = data[pos + 8:pos + 8 + content_words * 2]
        pos += 8 + content_words * 2
        shape_type = struct.unpack('<i', content[:4])[0]
        if shape_type != 3:
            yield []
            continue
        num_parts, num_points = struct.unpack('<ii', content[36:44])
        part_starts = list(struct.unpack('<%di' % num_parts, content[44:44 + 4 * num_parts]))
        points_at = 44 + 4 * num_parts
        points = struct.unpack('<%dd' % (2 * num_points), content[points_at:points_at + 16 * num_points])
        coords = [(points[i], points[i + 1]) for i in range(0, len(points), 2)]
        parts = []
        bounds = part_starts + [num_points]
        for a, b in zip(bounds, bounds[1:]):
            parts.append(coords[a:b])
        yield parts


def main():
    src, out, *bbox_args = sys.argv[1:]
    min_lat, min_lon, max_lat, max_lon = (float(v) for v in bbox_args)
    with zipfile.ZipFile(src) as z:
        shp_name = next(n for n in z.namelist() if n.endswith(SHP))
        dbf_name = next(n for n in z.namelist() if n.endswith(DBF))
        shp = z.read(shp_name)
        dbf = z.read(dbf_name)
    attrs = read_dbf(dbf)
    features = []
    for record, parts in zip(attrs, read_polylines(shp)):
        for part in parts:
            if len(part) < 2:
                continue
            lats = [p[1] for p in part]
            lngs = [p[0] for p in part]
            # Keep the line if any vertex is inside the box.
            if max(lats) < min_lat or min(lats) > max_lat or max(lngs) < min_lon or min(lngs) > max_lon:
                continue
            features.append({
                'type': 'Feature',
                'properties': {
                    'name': record.get('N02_003', ''),
                    'company': record.get('N02_004', ''),
                },
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [[round(x, 6), round(y, 6)] for x, y in part],
                },
            })
    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{len(features)} rail lines -> {out}')


if __name__ == '__main__':
    main()
