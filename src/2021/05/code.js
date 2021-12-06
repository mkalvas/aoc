import { sum } from '../../lib';

const parse = (input) =>
  input.map((l) => l.split(' -> ').map((p) => p.split(',').map(Number)));

const diagonal = (line) =>
  line[0][0] === line[1][0] || line[0][1] === line[1][1];

const plotPoint = (map, x, y) => {
  if (!map[x]) map[x] = [];
  if (!map[x][y]) map[x][y] = 0;
  map[x][y] += 1;
  return map;
};

const plotLine = ([[x, y], [x2, y2]], map) => {
  const dx = x === x2 ? 0 : x < x2 ? 1 : -1;
  const dy = y === y2 ? 0 : y < y2 ? 1 : -1;
  while (x !== x2 || y !== y2) {
    map = plotPoint(map, x, y);
    [x, y] = [x + dx, y + dy];
  }

  return plotPoint(map, x, y); // last point
};

const count = (map) =>
  sum(map.map((r) => r.filter(Boolean).filter((c) => c > 1).length));

const plot = (lines) => {
  let map = [];
  lines.forEach((l) => {
    map = plotLine(l, map);
  });
  return count(map);
};

export const solutionOne = (input) => plot(parse(input).filter(diagonal));
export const solutionTwo = (input) => plot(parse(input));
