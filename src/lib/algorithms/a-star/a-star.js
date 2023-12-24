import { BinaryHeap } from './binary-heap';

const getHeap = () => new BinaryHeap((a, b) => a.f < b.f);

const pathTo = (node) => {
  let curr = node;
  let path = [];
  while (curr.parent) {
    path.unshift(curr);
    curr = curr.parent;
  }
  return path;
};

const heuristics = {
  manhattan: (pos0, pos1) => {
    const dx = Math.abs(pos1.x - pos0.x);
    const dy = Math.abs(pos1.y - pos0.y);
    return dx + dy;
  },
  diagonal: (pos0, pos1) => {
    const factor = Math.sqrt(2);
    const dx = Math.abs(pos1.x - pos0.x);
    const dy = Math.abs(pos1.y - pos0.y);
    return dx + dy + (factor - 2) * Math.min(dx, dy);
  },
};

export const search = (graph, start, end, options) => {
  const heuristic = heuristics[options?.heuristic ?? 'manhattan'];
  const closest = options?.closest ?? false;
  graph.cleanDirty();

  const openHeap = getHeap();
  let closestNode = start;

  start.h = heuristic(start, end);
  graph.markDirty(start);
  openHeap.push(start);

  while (openHeap.size() > 0) {
    const currentNode = openHeap.pop();
    if (currentNode === end) return pathTo(currentNode);

    currentNode.closed = true;
    const neighbors = graph.neighbors(currentNode);

    for (let i = 0; i < neighbors.length; ++i) {
      const neighbor = neighbors[i];
      if (neighbor.closed || neighbor.isWall(currentNode)) continue;

      // The g score is the shortest distance from start to current node.
      const gScore = currentNode.g + neighbor.getCost(currentNode);
      const { visited } = neighbor;

      if (!visited || gScore < neighbor.g) {
        // score node
        neighbor.visited = true;
        neighbor.parent = currentNode;
        neighbor.h = neighbor.h || heuristic(neighbor, end);
        neighbor.g = gScore;
        neighbor.f = neighbor.g + neighbor.h;
        graph.markDirty(neighbor);

        if (closest) {
          const isNEquidistant = neighbor.h === closestNode.h;
          const isNCloser = neighbor.h < closestNode.h;
          const isNCheaper = neighbor.g < closestNode.g;
          const isNBetter = isNCloser || (isNEquidistant && isNCheaper);
          if (isNBetter) {
            closestNode = neighbor;
          }
        }

        if (!visited) {
          openHeap.push(neighbor); // put in heap according to f score
        } else {
          openHeap.rescoreElement(neighbor); // reorder heap
        }
      }
    }
  }

  // no path found, return closest if we want or nothing.
  if (closest) return pathTo(closestNode);
  return [];
};
