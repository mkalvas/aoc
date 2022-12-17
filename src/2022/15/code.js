import { cityDist } from '../../lib';

const inRange = (p, x, y) => cityDist([p.sx, p.sy], [x, y]) <= p.d;
const parse = (line) => {
  const [sx, sy, bx, by] = line.match(/(-?\d+)/g).nums();
  return { sx, sy, bx, by, d: cityDist([sx, sy], [bx, by]) };
};

export const solutionOne = (input) => {
  const Y = process.env.NODE_ENV === 'test' ? 10 : 2_000_000;
  const points = input.map(parse);
  const max = points.map((p) => p.sx).max();
  const widest = points.map((p) => p.d).max();

  // slight non-general optimization. we know that all points btw left and
  // right are covered. works fine but slower with one loop
  //   for x in range(-widest, max+widest)
  let left = -widest;
  let right = max + widest;

  for (let x = -widest; x <= max + widest; x++) {
    if (points.some((p) => inRange(p, x, Y))) {
      left = x;
      break;
    }
  }

  for (let x = max + widest; x >= -widest; x--) {
    if (points.some((p) => inRange(p, x, Y))) {
      right = x;
      break;
    }
  }

  return right - left;
};

export const solutionTwo = (input) => {
  const MAX = process.env.NODE_ENV === 'test' ? 20 : 4_000_000;
  const points = input.map(parse);
  const as = [];
  const bs = [];

  for (const { sx, sy, d } of points) {
    as.push(sy - sx + d + 1);
    as.push(sy - sx - d - 1);
    bs.push(sx + sy + d + 1);
    bs.push(sx + sy - d - 1);
  }

  for (const a of as) {
    for (const b of bs) {
      const [x, y] = [Math.floor((b - a) / 2), Math.floor((a + b) / 2)];
      if (x < 0 || MAX < x || y < 0 || MAX < y) continue;
      if (!points.some((p) => inRange(p, x, y))) return x * 4000000 + y;
    }
  }
};
