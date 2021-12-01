import { sum, takeEvery, union, zip } from '../../lib';

const vectorize = (dir) => {
  if (dir === '^') return [0, 1];
  if (dir === '>') return [1, 0];
  if (dir === 'v') return [0, -1];
  if (dir === '<') return [-1, 0];
};

const walkRoute = (vectors) => {
  let pos = [0, 0];
  let visited = new Set(['0,0']);
  for (const vector of vectors) {
    pos = zip(pos, vector).map(sum);
    visited.add(pos.join(','));
  }
  return visited;
};

export const solutionOne = (input) =>
  walkRoute(input[0].split('').map(vectorize)).size;

export const solutionTwo = (input) => {
  const vectors = input[0].split('').map(vectorize);
  const santa = walkRoute(takeEvery(vectors, 2, 0));
  const robot = walkRoute(takeEvery(vectors, 2, 1));
  return union(santa, robot).size;
};
