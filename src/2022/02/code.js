import { sum } from '../../lib';

const MAP = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };
const parse1 = (l) => l.split(' ').map((x) => MAP[x]);
const parse2 = (l) => {
  const [a, out] = l.split(' ');
  const opp = MAP[a];
  if (out === 'X') return [opp, opp - 1 || 3];
  if (out === 'Y') return [opp, opp];
  return [opp, (opp + 1) % 3 || 3];
};

const play = ([opp, me]) => {
  if (me === opp) return me + 3;
  if (me === 1 && opp === 3) return me + 6;
  if (me > opp && !(me === 3 && opp === 1)) return me + 6;
  return me;
};

export const solutionOne = (input) => sum(input.map(parse1).map(play));
export const solutionTwo = (input) => sum(input.map(parse2).map(play));
