import { nbrs, s2p, p2s, range, distSq } from '../../lib';

const DELTAS = { R: [1, 0], L: [-1, 0], U: [0, -1], D: [0, 1] };

const parseMove = (line) => {
  const [dir, len] = line.split(' ');
  return range(0, +len - 1).map((_) => DELTAS[dir]);
};

const grid = ([x, y]) =>
  range(y - 1, y + 1).map((r) => range(x - 1, x + 1).map((c) => [c, r]));

const moveTail = (state) => {
  const hn = nbrs(grid(state.h), 1, 1).map((n) => p2s(n[0]));
  if (hn.includes(p2s(state.t))) return state;

  state.t = grid(state.t)
    .nbrs(1, 1)
    .map((n) => p2s(n[0]))
    .filter((p) => hn.includes(p))
    .reduce(
      ([minp, min], c) => {
        const p = s2p(c);
        const d = distSq(p, state.h);
        return d < min ? [p, d] : [minp, min];
      },
      [null, 3]
    )[0];

  state.touched.add(p2s(state.t));
  return state;
};

const walk = (state, move, step) => {
  state.h = state.h.map((coord, index) => coord + move[index]);
  return step === 0 ? state : moveTail(state);
};

const startingState = () => ({
  h: [0, 0],
  t: [0, 0],
  touched: new Set().add('0,0'),
});

export const solutionOne = (input) =>
  input
    .map(parseMove)
    .flat()
    .reduce((...args) => walk(...args), startingState()).touched.size;

export const solutionTwo = (input) => {
  const moves = input.map(parseMove).flat();
  const states = new Array(9).fill().map(startingState);
  for (let [step, move] of moves.entries()) {
    states[0] = walk(states[0], move, step);
    for (let i = 1; i < 9; i++) {
      states[i].h = states[i - 1].t;
      states[i] = moveTail(states[i]);
    }
  }
  return states.at(-1).touched.size;
};
