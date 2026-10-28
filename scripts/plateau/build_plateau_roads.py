#!/usr/bin/env python3
# Convert PLATEAU CityGML transportation (road) surfaces into a lightweight GeoJSON
# for the Access page 3D guide.
#
# Usage:
#   python3 -I scripts/plateau/build_plateau_roads.py <citygml.zip> <out.geojson> <min_lat> <min_lon> <max_lat> <max_lon>
#
# Source: Project PLATEAU 3D city models (MLIT). License: PLATEAU Site Policy.

import json
import sys
import zipfile
import xml.etree.ElementTree as ET

GML = 'http://www.opengis.net/gml'
TRAN = 'http://www.opengis.net/citygml/transportation/2.0'
KEEP_EVERY = 2  # Keep every Nth vertex to limit file size.


def parse_ring(text):
    # EPSG:6697 is latitude, longitude, height order.
    values = [float(v) for v in text.split()]
    points = [(values[i], values[i + 1]) for i in range(0, len(values) - 2, 3)]
    return points[::KEEP_EVERY]


def inside(ring, bbox):
    # ring is [[lon, lat], ...]
    min_lat, min_lon, max_lat, max_lon = bbox
    lon = sum(p[0] for p in ring) / len(ring)
    lat = sum(p[1] for p in ring) / len(ring)
    return min_lat <= lat <= max_lat and min_lon <= lon <= max_lon


def main():
    src, out, *bbox_args = sys.argv[1:]
    bbox = tuple(float(v) for v in bbox_args)
    features = []
    with zipfile.ZipFile(src) as z:
        for name in z.namelist():
            if not (name.startswith('udx/tran/') and name.endswith('.gml')):
                continue
            root = ET.fromstring(z.read(name))
            for road in root.iter('{%s}Road' % TRAN):
                # Use only the road surface geometry (lod1MultiSurface).
                for polygon in road.iter('{%s}Polygon' % GML):
                    pos = polygon.find('./{%s}exterior/{%s}LinearRing/{%s}posList' % (GML, GML, GML))
                    if pos is None or not pos.text:
                        continue
                    points = parse_ring(pos.text)
                    if len(points) < 4:
                        continue
                    ring = [[round(lon, 6), round(lat, 6)] for lat, lon in points]
                    if ring[0] != ring[-1]:
                        ring.append(ring[0])
                    if not inside(ring, bbox):
                        continue
                    features.append({
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {'type': 'Polygon', 'coordinates': [ring]},
                    })

    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{len(features)} road polygons -> {out}')


if __name__ == '__main__':
    main()
