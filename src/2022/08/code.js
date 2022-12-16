import { product, reverse } from '../../lib';

const parse = (input) => input.map((r) => r.split('').nums());
const sides = (grid) => [
  grid,
  [...grid].map(reverse),
  [...grid].transpose(),
  [...grid].transpose().map(reverse),
];

const scanRows = (rows) =>
  rows.map((row) =>
    row.nums().reduce((acc, _, i) => {
      if (i === 0 || row[i] > row.slice(0, i).max()) acc.push(i);
      return acc;
    }, [])
  );

const score = (input, [x, y]) => {
  const tree = input[y][x];
  let [l, r, t, b] = [0, 0, 0, 0];
  for (let i = x - 1; i >= 0; i--) {
    l++;
    if (input[y][i] >= tree) break;
  }
  for (let i = x + 1; i < input[y].length; i++) {
    r++;
    if (input[y][i] >= tree) break;
  }
  for (let j = y - 1; j >= 0; j--) {
    t++;
    if (input[j][x] >= tree) break;
  }
  for (let j = y + 1; j < input.length; j++) {
    b++;
    if (input[j][x] >= tree) break;
  }
  return product([l, r, t, b]);
};

export const solutionOne = (input) => {
  const visible = new Set();
  const [w, h] = [input[0].length - 1, input.length - 1];
  const [l, r, t, b] = sides(parse(input)).map(scanRows);
  l.forEach((r, y) => r.forEach((x) => visible.add(`${x},${y}`)));
  r.forEach((r, y) => r.forEach((x) => visible.add(`${w - x},${y}`)));
  t.forEach((r, x) => r.forEach((y) => visible.add(`${x},${y}`)));
  b.forEach((r, x) => r.forEach((y) => visible.add(`${x},${h - y}`)));
  return visible.size;
};

export const solutionTwo = (input) => {
  const grid = parse(input);
  return grid
    .map((row, x) => row.map((_, y) => score(grid, [x, y])))
    .flat()
    .max();
};
