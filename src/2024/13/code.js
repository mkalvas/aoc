import '../../lib';
import { groupLines } from '../../lib';

const MOVES = /\d+/g;

// px = ap * ax + bp * bx;
// py = ap * ay + bp * by;
//===========================
// t = iu + jv;
// x = iy + jz;
//===========================
// i = (t - jv) / u;
// x = ((t - jv) / u)y + jz;
// j = (ux - ty) / (uz - vy);
//===========================
// ap = (px * by - py * bx) / (ax * by - ay * bx)
// bp = (ax * py - ay * px) / (ax * by - ay * bx)
// todo: general name for this type of system of equations
const solve = (input, additional) => {
  let cost = 0;
  for (const game of groupLines(input)) {
    let [[ax, ay], [bx, by], [px, py]] = game.map((l) => l.match(MOVES).nums());
    px = px + additional;
    py = py + additional;
    let bp = (ax * py - px * ay) / (ax * by - bx * ay);
    let ap = (px - bp * bx) / ax;
    cost += ap % 1 === 0 && bp % 1 === 0 ? ap * 3 + bp : 0;
  }
  return cost;
};

export const solutionOne = (input) => solve(input, 0);

export const solutionTwo = (input) => solve(input, 10000000000000);
