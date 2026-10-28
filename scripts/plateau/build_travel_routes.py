#!/usr/bin/env python3
# Build the rail path from Nagoya Station to Toyohashi Station for each train type, by finding the
# shortest connected route along the railway lines in rail-regional.geojson.
#
# Usage:
#   python3 -I scripts/plateau/build_travel_routes.py <rail-regional.geojson> <out.geojson>
#
# Source: National Land Numerical Information "Railway (N02)", MLIT. License: CC BY 4.0.
# Only the Python standard library is used.

import heapq
import json
import math
import sys

NAGOYA = (136.8815, 35.1706)
TOYOHASHI = (137.3817, 34.7691)
HAMAMATSU = (137.7332, 34.7036)

# Trip id -> (origin, destination, railway line names in N02 that the train runs on).
TRIPS = {
    'shinkansen': (NAGOYA, TOYOHASHI, ['東海道新幹線']),
    'jr': (NAGOYA, TOYOHASHI, ['東海道線']),
    'meitetsu': (NAGOYA, TOYOHASHI, ['名古屋本線']),
    'jr_hamamatsu': (HAMAMATSU, TOYOHASHI, ['東海道線']),
}


def haversine(a, b):
    lng1, lat1 = map(math.radians, a)
    lng2, lat2 = map(math.radians, b)
    h = math.sin((lat2 - lat1) / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin((lng2 - lng1) / 2) ** 2
    return 2 * 6371000 * math.asin(math.sqrt(h))


def key(point):
    return (round(point[0], 6), round(point[1], 6))


def build_graph(features):
    graph = {}
    for f in features:
        coords = f['geometry']['coordinates']
        for a, b in zip(coords, coords[1:]):
            ka, kb = key(a), key(b)
            if ka == kb:
                continue
            d = haversine(a, b)
            graph.setdefault(ka, []).append((kb, d, b))
            graph.setdefault(kb, []).append((ka, d, a))
    return graph


def nearest_node(graph, point):
    return min(graph, key=lambda k: haversine(k, point))


def shortest_path(graph, start, goal):
    # Dijkstra over the line graph. Returns the list of [lng, lat] points on the route.
    dist = {start: 0.0}
    prev = {}
    queue = [(0.0, start)]
    while queue:
        d, node = heapq.heappop(queue)
        if node == goal:
            break
        if d > dist.get(node, math.inf):
            continue
        for nxt, w, _ in graph.get(node, []):
            nd = d + w
            if nd < dist.get(nxt, math.inf):
                dist[nxt] = nd
                prev[nxt] = node
                heapq.heappush(queue, (nd, nxt))
    if goal not in dist:
        raise SystemExit('no connected route found')
    path = [goal]
    while path[-1] != start:
        path.append(prev[path[-1]])
    path.reverse()
    return [list(p) for p in path], dist[goal]


def main():
    src, out = sys.argv[1:]
    with open(src, encoding='utf-8') as f:
        rail = json.load(f)['features']

    features = []
    for mode, (origin, destination, names) in TRIPS.items():
        lines = [x for x in rail if x['properties']['name'] in names]
        graph = build_graph(lines)
        start = nearest_node(graph, origin)
        goal = nearest_node(graph, destination)
        path, length = shortest_path(graph, start, goal)
        # Keep the exact station position at both ends.
        path = [list(origin)] + path[1:-1] + [list(destination)]
        features.append({
            'type': 'Feature',
            'properties': {'mode': mode, 'length_m': round(length)},
            'geometry': {'type': 'LineString', 'coordinates': path},
        })
        print(f'{mode}: {round(length)} m, {len(path)} points')

    with open(out, 'w', encoding='utf-8') as f:
        json.dump({'type': 'FeatureCollection', 'features': features}, f, ensure_ascii=False, separators=(',', ':'))


if __name__ == '__main__':
    main()
