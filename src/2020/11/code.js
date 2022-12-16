const EMPTY = 'L';
const FLOOR = '.';
const TAKEN = '#';
const SLOPES = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const printMap = (map) =>
  map
    .map((r) => r.join(''))
    .flat()
    .join('\n');

const getSeat = (cell, map, dx, dy, i = 1) =>
  map[cell.row + dy * i]?.[cell.col + dx * i];

const getVisible = (...args) => {
  for (let i = 1; i >= 1; i++) {
    const seat = getSeat(...args, i);
    if (seat !== FLOOR) return seat;
  }
};

const countNeighbors = (cell, map, getFn) =>
  SLOPES.reduce(
    (sum, s) => sum + (getFn(cell, map, ...s) === TAKEN ? 1 : 0),
    0
  );

const evolve = (seat, coords, map, config) => {
  if (seat === FLOOR) return [FLOOR, false];
  const neighbors = countNeighbors(coords, map, config.getFn);
  if (seat === EMPTY && neighbors === 0) return [TAKEN, true];
  if (seat === TAKEN && neighbors >= config.saturation) return [EMPTY, true];
  return [seat, false];
};

export const runGame = (seatMap, config) => {
  let map = seatMap.map((s) => s.split(''));
  while (true) {
    let changeCount = 0;
    map = map.map((rowCells, row) =>
      rowCells.map((cell, col) => {
        const [newSeat, wasChanged] = evolve(cell, { row, col }, map, config);
        if (wasChanged) changeCount++;
        return newSeat;
      })
    );

    if (changeCount === 0) return map;
  }
};

export const solution = (config) => (map) =>
  runGame(map, config).flat().join('').match(/#/g).length;

export const GAME_CONFIG_ONE = {
  cell: null,
  changeCount: 0,
  getFn: getSeat,
  map: null,
  saturation: 4,
  seat: null,
  width: null,
};

export const GAME_CONFIG_TWO = {
  ...GAME_CONFIG_ONE,
  getFn: getVisible,
  saturation: 5,
};

export const solutionOne = solution(GAME_CONFIG_ONE);
export const solutionTwo = solution(GAME_CONFIG_TWO);
