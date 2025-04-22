import { pts2gs, vals, sk, nbrs } from '../../lib';

const NS = /-?\d+/g;

const score = (robots, width, height) => {
  let scores = { tl: 0, tr: 0, bl: 0, br: 0 };
  const midy = Math.floor(height / 2);
  const midx = Math.floor(width / 2);
  for (const [x, y] of robots) {
    if (y < midy && x < midx) scores.tl++;
    if (y < midy && x > midx) scores.tr++;
    if (y > midy && x < midx) scores.bl++;
    if (y > midy && x > midx) scores.br++;
  }
  return vals(scores).product();
};

// recognize tree by first iteration with a 3x3 grid of robots
const isTree = (robots) => {
  const rs = new Set(robots.map(([c, r]) => sk(r, c)));
  for (const [c, r] of robots) {
    const ns = nbrs([], r, c, true, false, true);
    if (ns.every(([_, y, x]) => rs.has(sk(y, x)))) return true;
  }
};

const solve = (input, steps, width, height) => {
  const robots = input.map((l) => l.match(NS).nums()); // [px, py, vx, vy]
  for (let s = 0; s < steps; s++) {
    if (isTree(robots)) return s;
    for (let i = 0; i < robots.length; i++) {
      robots[i][0] = (robots[i][0] + robots[i][2] + width) % width;
      robots[i][1] = (robots[i][1] + robots[i][3] + height) % height;
    }
  }
  return score(robots, width, height);
};

export const solutionOne = (input) =>
  solve(input, 100, process.env.TEST ? 11 : 101, process.env.TEST ? 7 : 103);

export const solutionTwo = (input) =>
  process.env.TEST ? true : solve(input, Infinity, 101, 103);
