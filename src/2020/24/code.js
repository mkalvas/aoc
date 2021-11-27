const delta = {
  e: [1, 0],
  ne: [1, -1],
  nw: [0, -1],
  w: [-1, 0],
  se: [0, 1],
  sw: [-1, 1],
};

const move = ([x, y], step) => [x + delta[step][0], y + delta[step][1]];

const walk = (input) =>
  input.reduce((flipped, line) => {
    const key = line
      .match(/[sn]?[ew]/g)
      .reduce(move, [0, 0])
      .join(',');
    return flipped.delete(key) ? flipped : flipped.add(key);
  }, new Set());

const getNeighbors = (key) =>
  Object.keys(delta).map((d) => move(key.split(',').map(Number), d).join(','));

const countNeighbors = (flipped) => {
  let counts = new Map();
  for (const tile of flipped) {
    getNeighbors(tile).forEach((n) => counts.set(n, (counts.get(n) ?? 0) + 1));
  }
  return counts;
};

const evolve = (flipped, counts) => {
  const nextState = new Set();
  for (const [tile, count] of counts) {
    if ((flipped.has(tile) && count === 1) || count === 2) {
      nextState.add(tile);
    }
  }
  return nextState;
};

export const solutionOne = (input) => walk(input).size;

export const solutionTwo = (input) => {
  let flipped = walk(input);
  for (let i = 0; i < 100; i++) {
    const counts = countNeighbors(flipped);
    flipped = evolve(flipped, counts);
  }
  return flipped.size;
};
