import { chars, g2s, groupLines, oob, sk } from '../../lib';

const MUTATIONS = { '#': '##', O: '[]', '.': '..', '@': '@.' };
const mutateMap = (grid) =>
  grid.map((r) =>
    chars(r)
      .map((c) => MUTATIONS[c])
      .join(''),
  );

const findRobot = (grid) => {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '@') return { x, y };
    }
  }
};

const score = (grid) => {
  let score = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 'O' || grid[y][x] === '[') score += 100 * y + x;
    }
  }
  return score;
};

const movable = (c) => c === '@' || c === 'O' || c === '[' || c === ']';

const hasSpace = (grid, boxes, delta) =>
  boxes.every(([bx, by]) => {
    let next = grid[by + delta.y][bx + delta.x];
    return movable(next) || next === '.';
  });

const blockchain = (grid, x, y, delta) => {
  let boxes = [];
  let queue = [[x, y]];
  let seen = new Set();
  while (true) {
    let pos = queue.pop();
    if (!pos) break;

    [x, y] = pos;
    seen.add(sk(x, y));
    let c = grid[y][x];

    if (c === '[' && delta.y !== 0 && !seen.has(sk(x + 1, y))) {
      if (queue.every(([px, py]) => px !== x + 1 && py !== y)) {
        queue.push([x + 1, y]);
      }
    }

    if (c === ']' && delta.y !== 0 && !seen.has(sk(x - 1, y))) {
      if (queue.every(([px, py]) => px !== x - 1 && py !== y)) {
        queue.push([x - 1, y]);
      }
    }

    if (movable(c)) {
      boxes.push([x, y, c]);
      queue.push([x + delta.x, y + delta.y]);
    }
  }

  return boxes;
};

const move = (grid, boxes, delta) => {
  for (const [bx, by, bc] of boxes.reverse()) {
    grid[by + delta.y][bx + delta.x] = bc;
    grid[by][bx] = '.';
  }
};

const MOVES = {
  '^': { y: -1, x: 0 },
  '>': { y: 0, x: 1 },
  '<': { y: 0, x: -1 },
  v: { y: 1, x: 0 },
};

const step = (grid, dir, robot, pt1) => {
  const delta = MOVES[dir];
  const boxes = blockchain(grid, robot.x, robot.y, delta);
  if (hasSpace(grid, boxes, delta)) {
    move(grid, boxes, delta);
    robot.x += delta.x;
    robot.y += delta.y;
  }
};

const solve = (input, mutate) => {
  let [grid, moves] = groupLines(input);
  moves = moves.join('').split('');
  grid = mutate(grid).map((r) => r.split(''));
  let robot = findRobot(grid);
  for (const move of moves) step(grid, move, robot, true);
  return score(grid);
};

export const solutionOne = (input) => solve(input, (grid) => grid);
export const solutionTwo = (input) => solve(input, mutateMap);
