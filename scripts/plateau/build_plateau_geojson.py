#!/usr/bin/env python3
# Convert PLATEAU CityGML (LOD1) building models into a lightweight GeoJSON
# for the Access page 3D flyover.
#
# Usage:
#   python3 -I scripts/plateau/build_plateau_geojson.py <citygml.zip> <out.geojson> <min_lat> <min_lon> <max_lat> <max_lon>
#
# Source: Project PLATEAU 3D city models (MLIT). License: PLATEAU Site Policy.
# Attribution is shown on the Access page.

import json
import sys
import zipfile
import xml.etree.ElementTree as ET

NS = {
    'bldg': 'http://www.opengis.net/citygml/building/2.0',
    'gml': 'http://www.opengis.net/gml',
}


def parse_pos_list(text):
    # EPSG:6697 is latitude, longitude, height order.
    values = [float(v) for v in text.split()]
    return [(values[i], values[i + 1], values[i + 2]) for i in range(0, len(values), 3)]


def footprint_from_solid(solid):
    # Use the lowest flat surface of the LOD1 solid as the footprint.
    rings = []
    for pos in solid.iter('{%s}posList' % NS['gml']):
        pts = parse_pos_list(pos.text)
        if len(pts) >= 3:
            rings.append(pts)
    if not rings:
        return None
    min_z = min(p[2] for ring in rings for p in ring)
    bottom = [r for r in rings if all(abs(p[2] - min_z) < 0.01 for p in r)]
    if not bottom:
        return None
    ring = bottom[0]
    return [[round(p[1], 6), round(p[0], 6)] for p in ring]


def height(text):
    # PLATEAU uses -9999 for unknown heights. Extruding a negative height breaks rendering,
    # so fall back to a small default block height.
    value = float(text)
    if value <= 0:
        return 3.0
    return round(value, 1)


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
            if not (name.startswith('udx/bldg/') and name.endswith('.gml')):
                continue
            root = ET.fromstring(z.read(name))
            for building in root.iter('{%s}Building' % NS['bldg']):
                height_el = building.find('bldg:measuredHeight', NS)
                solid = building.find('.//bldg:lod1Solid', NS)
                if height_el is None or solid is None:
                    continue
                ring = footprint_from_solid(solid)
                if not ring:
                    continue
                if not inside(ring, bbox):
                    continue
                features.append({
                    'type': 'Feature',
                    'properties': {'h': height(height_el.text)},
                    'geometry': {'type': 'Polygon', 'coordinates': [ring]},
                })

    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))
    print(f'{len(features)} buildings -> {out}')


if __name__ == '__main__':
    main()
