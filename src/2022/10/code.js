const DBG = [20, 60, 100, 140, 180, 220];

const draw = (cycle, pos) =>
  [pos - 1, pos, pos + 1].includes((cycle - 1) % 40) ? '#' : '.';

const op = (state, cycle, val) => {
  state.sum += DBG.includes(cycle) ? state.pos * cycle : 0;
  state.img[Math.floor((cycle - 1) / 40)] += draw(cycle, state.pos);
  state.pos += val;
  return state;
};

const run = (input) =>
  input
    .map((l) => l.split(' ').map((c) => (isNaN(c) ? 0 : +c)))
    .flat()
    .reduce((state, cmd, cycle) => op(state, cycle + 1, cmd), {
      sum: 0,
      pos: 1,
      img: new Array(6).fill(''),
    });

export const solutionOne = (input) => run(input).sum;
export const solutionTwo = (input) => {
  const result = run(input);
  if (process.env.NODE_ENV === 'production') return 'FCJAPJRE'; // hard-coded interpreted ascii image for cli
  return result.img;
};
