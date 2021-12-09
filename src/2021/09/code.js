import { nums, numSort, sum, product, union } from '../../lib';

const getNeighbors = (map, i, j) =>
  [
    [i + 1, j],
    [i - 1, j],
    [i, j + 1],
    [i, j - 1],
  ].filter(
    ([ni, nj]) => ni >= 0 && ni < map.length && nj >= 0 && nj < map[0].length
  );

const getLowPoints = (map) => {
  const lowPoints = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const neighbors = getNeighbors(map, i, j);
      if (neighbors.every(([ni, nj]) => map[i][j] < map[ni][nj])) {
        lowPoints.push([i, j]);
      }
    }
  }
  return lowPoints;
};

const getBasinSize = (map, i, j) => {
  let basin = new Set([`${i},${j}`]);
  for (const [ni, nj] of getNeighbors(map, i, j)) {
    if (map[i][j] < map[ni][nj] && map[ni][nj] < 9) {
      basin = union(basin, getBasinSize(map, ni, nj));
    }
  }
  return basin;
};

export const solutionOne = (input) => {
  const map = input.map((line) => nums(line.split('')));
  return sum(getLowPoints(map).map(([i, j]) => map[i][j] + 1));
};

export const solutionTwo = (input) => {
  const map = input.map((line) => nums(line.split('')));
  return product(
    getLowPoints(map)
      .map(([i, j]) => getBasinSize(map, i, j).size)
      .sort(numSort)
      .slice(-3)
  );
};
