import { aofl } from '../../lib';

const DELTAS = {
  '|S': [0, 1],
  '|N': [0, -1],
  '-E': [1, 0],
  '-W': [-1, 0],
  LS: [1, 0],
  LW: [0, -1],
  JS: [-1, 0],
  JE: [0, -1],
  '7N': [-1, 0],
  '7E': [0, 1],
  FN: [1, 0],
  FW: [0, 1],
};

const findStart = (input) => {
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      if (input[y][x] === 'S') return { x, y };
    }
  }
};

const startingDir = (above, below) => {
  if (above === '|' || above === 'F' || above === '7') return 'N';
  if (below === '|' || below === 'L' || below === 'J') return 'S';
  return 'W';
};

const nextDir = (dx, dy) => {
  if (dy === 1) return 'S';
  else if (dy === -1) return 'N';
  else if (dx === -1) return 'W';
  return 'E';
};

const findLoop = (lines) => {
  const start = findStart(lines);
  let { x, y } = { ...start };
  let ptsOnLoop = aofl(lines.length, () => []);
  let dir = startingDir(lines[y - 1]?.[x], lines[y + 1]?.[x]);
  if (dir === 'N') y--;
  if (dir === 'S') y++;
  if (dir === 'W') x--;

  let steps = 1;
  let path = [start, { x, y }];
  ptsOnLoop[start.y][start.x] = true;
  ptsOnLoop[y][x] = true;

  while (x !== start.x || y !== start.y) {
    let [dx, dy] = DELTAS[lines[y][x] + dir];
    dir = nextDir(dx, dy);
    x += dx;
    y += dy;
    ptsOnLoop[start.y][start.x] = true;
    ptsOnLoop[y][x] = true;
    steps++;
    path.push({ x, y });
  }
  return [steps / 2, ptsOnLoop];
};

const crossFillLoop = (lines, ptsOnLoop) => {
  let filled = 0;
  for (const [y, line] of lines.entries()) {
    let inside = false;
    let corner = undefined;
    for (const [x, char] of line.split('').entries()) {
      if (ptsOnLoop[y][x]) {
        if (char === '-') continue;
        if (char === '|') inside = !inside;
        else {
          if (
            (corner === 'L' && char === '7') ||
            (corner === 'F' && char === 'J')
          ) {
            inside = !inside;
          }
          corner = corner ? undefined : char;
        }
      } else if (inside) {
        filled++;
      }
    }
  }
  return filled;
};

export const solutionOne = (input) => findLoop(input)[0];
export const solutionTwo = (input) => crossFillLoop(input, findLoop(input)[1]);
