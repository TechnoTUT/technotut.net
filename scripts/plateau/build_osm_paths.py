#!/usr/bin/env python3
# Convert OpenStreetMap data (an .osm XML file from the OSM API /api/0.6/map) into a GeoJSON of roads
# and paths, for the campus 3D guide. PLATEAU road data covers public roads only, so on-campus roads
# and footpaths come from OSM.
#
# Usage:
#   curl "https://api.openstreetmap.org/api/0.6/map?bbox=137.3990,34.6975,137.4190,34.7050" -o campus.osm
#   python3 -I scripts/plateau/build_osm_paths.py campus.osm <out.geojson>
#
# Source: (c) OpenStreetMap contributors. License: ODbL 1.0.
# Only the Python standard library is used.

import json
import sys
import xml.etree.ElementTree as ET


def main():
    src, out = sys.argv[1:]
    root = ET.parse(src).getroot()
    nodes = {n.get('id'): (float(n.get('lon')), float(n.get('lat'))) for n in root.iter('node')}
    features = []
    for way in root.iter('way'):
        tags = {t.get('k'): t.get('v') for t in way.findall('tag')}
        kind = tags.get('highway')
        if not kind:
            continue
        coords = [nodes[nd.get('ref')] for nd in way.findall('nd') if nd.get('ref') in nodes]
        if len(coords) < 2:
            continue
        features.append({
            'type': 'Feature',
            'properties': {'kind': kind},
            'geometry': {'type': 'LineString', 'coordinates': [[round(x, 6), round(y, 6)] for x, y in coords]},
        })
    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{len(features)} ways -> {out}')


if __name__ == '__main__':
    main()
