import { Graph, nums, search } from '../../lib';

const mod = (n) => (n > 9 ? n - 9 : n);

const solve = (map) => {
  const graph = new Graph(map);
  const start = graph.grid[0][0];
  const end = graph.grid[graph.grid.length - 1][graph.grid[0].length - 1];
  const path = search(graph, start, end);
  return path.reduce((acc, node) => acc + node.weight, 0);
};

export const solutionOne = (input) =>
  solve(input.map((r) => nums(r.split(''))));

export const solutionTwo = (input) => {
  let map = input
    .map((r) => nums(r.split('')))
    .map((r) => [
      ...r,
      ...r.map((v) => mod(v + 1)),
      ...r.map((v) => mod(v + 2)),
      ...r.map((v) => mod(v + 3)),
      ...r.map((v) => mod(v + 4)),
    ]);

  const dup = [...map];
  for (let i = 1; i <= 4; i++) {
    for (const row of dup) {
      map.push(row.map((v) => mod(v + i)));
    }
  }

  return solve(map);
};
