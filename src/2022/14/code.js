import { range, s2p, HALF, FULL } from '../../lib';

const pair = (line) => line.split(' -> ').map(s2p).cons();

const draw = (lines) => {
  let ymax = 0;
  let grid = [];
  for (let line of lines) {
    const [x1, y1, x2, y2] = line.flat();
    const [[sx, ex], [sy, ey]] = [[x1, x2].asc(), [y1, y2].asc()];
    if (ey > ymax) ymax = ey;
    for (let y of range(sy, ey)) {
      for (let x of range(sx, ex)) {
        if (!grid[y]) grid[y] = [];
        grid[y][x] = FULL;
      }
    }
  }
  return { grid, ymax, count: 0, done: false };
};

const drop = (state) => {
  let [x, y] = [500, 0];
  let resting = false;
  while (!resting) {
    if (y > state.ymax) {
      state.done = true;
      return state;
    } else if (!state.grid[y + 1]?.[x]) {
      y++;
    } else if (!state.grid[y + 1]?.[x - 1]) {
      y++;
      x--;
    } else if (!state.grid[y + 1]?.[x + 1]) {
      y++;
      x++;
    } else {
      resting = true;
      if (x === 500 && y === 0) {
        state.done = true;
        break;
      }
    }
  }

  if (!state.grid[y]) state.grid[y] = [];
  state.grid[y][x] = HALF;
  state.count++;
  return state;
};

const run = (state) => {
  while (!state.done) drop(state);
  return state;
};

export const solutionOne = (input) => run(draw(input.map(pair).flat())).count;
export const solutionTwo = (input) => {
  let state = draw(input.map(pair).flat());
  state.grid.push([]);
  state.grid.push(new Array(1000).fill(FULL));
  state.ymax += 2;
  return run(state).count;
};
