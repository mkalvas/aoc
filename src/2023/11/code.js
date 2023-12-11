import { chars, gridEach, cityDist } from '../../lib';

const empties = (grid) => {
  let rows = [];
  grid.forEach((line, r) => {
    if (line.every((c) => c === '.')) rows.push(r);
  });
  return rows;
};

const distances = (stars, rows, cols, scale) => {
  let dists = [];
  for (const p of stars.combinations()) {
    let [ax, ay] = [Math.min(p[0][0], p[1][0]), Math.min(p[0][1], p[1][1])];
    let [bx, by] = [Math.max(p[0][0], p[1][0]), Math.max(p[0][1], p[1][1])];

    const extraRows = rows.filter((i) => ax < i && i <= bx).length;
    const extraCols = cols.filter((i) => ay < i && i <= by).length;

    bx += extraRows * (scale - 1);
    by += extraCols * (scale - 1);

    dists.push(cityDist([ax, ay], [bx, by]));
  }
  return dists;
};

const solve = (input, scale) => {
  let grid = input.map(chars);
  const rows = empties(grid);
  grid = grid.transpose();
  const cols = empties(grid);

  let stars = [];
  gridEach(grid, (c, y, x) => {
    if (c === '#') stars.push([x, y]);
  });

  return distances(stars, rows, cols, scale).sum();
};

export const solutionOne = (input) => solve(input, 2);
export const solutionTwo = (input, scale = 1000000) => solve(input, scale);
