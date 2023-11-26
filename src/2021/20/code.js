import { groupLines, b2d } from '../../lib';

const oob = (r, c, rows, cols) => r < 0 || c < 0 || r >= rows || c >= cols;

const enhance = (pixels, alg, iter) => {
  let next = [];
  const rows = pixels.length;
  const cols = pixels[0].length;
  for (let r = -1; r <= rows; r++) {
    next.push([]);
    for (let c = -1; c <= cols; c++) {
      let index = '';
      for (let dr of [-1, 0, 1]) {
        for (let dc of [-1, 0, 1]) {
          if (oob(r + dr, c + dc, rows, cols)) {
            index += `${(iter % 2) * alg[0]}`;
          } else {
            index += `${pixels[r + dr][c + dc]}`;
          }
        }
      }
      next[r + 1][c + 1] = +alg[b2d(index)];
    }
  }
  return next;
};

const solve = (input, rounds) => {
  let [algStr, lines] = groupLines(input);
  let pixels = lines.map((l) => l.split('').map((c) => (c === '#' ? 1 : 0)));
  const alg = algStr[0]
    .split('')
    .map((c) => (c === '#' ? 1 : 0))
    .join('');

  for (let round = 0; round < rounds; round++) {
    pixels = enhance(pixels, alg, round);
  }

  return pixels.map((r) => r.sum()).sum();
};

export const solutionOne = (input) => solve(input, 2);
export const solutionTwo = (input) => solve(input, 50);
