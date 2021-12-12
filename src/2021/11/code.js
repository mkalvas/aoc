import { nbrs, nums } from '../../lib';

const loop = (state, callback) =>
  state.grid.forEach((r, i) => r.forEach((c, j) => callback(c, i, j)));

const flash = (state, i, j) => {
  state.flashes++;
  state.flashed.add(`${i},${j}`);
  incrementNeighbors(state, i, j);
};

const incrementNeighbors = (state, i, j, inc = 1) => {
  [i - 1, i, i + 1].forEach((r) =>
    [j - 1, j, j + 1].forEach((c) => {
      if (
        r >= 0 &&
        c >= 0 &&
        r < state.grid.length &&
        c < state.grid[r].length &&
        !state.flashed.has(`${r},${c}`)
      ) {
        state.grid[r][c] += inc;
        if (state.grid[r][c] >= 10) flash(state, r, c);
      }
    })
  );
};

const evolve = (state) => {
  state.flashed.clear();
  state.step++;
  loop(state, (_, i, j) => (state.grid[i][j] += 1));
  loop(state, (level, i, j) => {
    if (level >= 10 && !state.flashed.has(`${i},${j}`)) flash(state, i, j);
  });
  loop(state, (_, i, j) => {
    if (state.flashed.has(`${i},${j}`)) {
      state.grid[i][j] = 0;
    }
  });
};

const initState = (input) => ({
  flashes: 0,
  flashed: new Set(),
  grid: input.map((r) => nums(r.split(''))),
  step: 0,
});

export const solutionOne = (input) => {
  let state = initState(input);
  for (let i = 0; i < 100; i++) {
    evolve(state);
  }
  return state.flashes;
};

export const solutionTwo = (input, steps = 100) => {
  let state = initState(input);
  while (state.flashed.size !== state.grid[0].length * state.grid.length) {
    evolve(state);
  }
  return state.step;
};
