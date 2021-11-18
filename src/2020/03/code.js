const SLOPES = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const getNextPos = (pos, width, dx) => (pos + dx) % width;
const checkTree = (line, pos) => line.charAt(pos) === '#';

const traverse = (dx, dy) => (input, pos = 0) => {
  if (input.length < dy) return 0;

  const line = input[0];
  const newInput = input.slice(dy);
  const nextPos =
    newInput.length > 0 ? getNextPos(pos, newInput[0].length, dx) : 0;

  const treeCount = checkTree(line, pos) ? 1 : 0;
  return traverse(dx, dy)(newInput, nextPos) + treeCount;
};

export const solutionOne = traverse(3, 1);

export const solutionTwo = (input) =>
  SLOPES.map((s) => traverse(...s)(input)).reduce((acc, cur) => acc * cur, 1);
