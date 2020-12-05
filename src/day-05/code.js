const textToBin = (text, match) =>
  text
    .split('')
    .map((c) => (c === match ? '1' : '0'))
    .join('');

const parseLine = (line) => {
  const row = parseInt(textToBin(line.slice(0, -3), 'B'), 2);
  const col = parseInt(textToBin(line.slice(-3), 'R'), 2);
  return {
    row: parseInt(textToBin(line.slice(0, -3), 'B'), 2),
    col: parseInt(textToBin(line.slice(-3), 'R'), 2),
    id: row * 8 + col,
  };
};

export const parseData = (input) => input.map(parseLine);

export const puzzleOne = (input) =>
  parseData(input).reduce(
    (max, pass) => (pass.id > max || max == null ? pass.id : max),
    null
  );

export const puzzleTwo = (input) =>
  parseData(input)
    .map((bp) => bp.id)
    .sort((a, b) => a - b)
    .find((id, i, arr) => {
      if (arr.length <= i + 1) return false;
      return arr[i + 1] - id > 1;
    }) + 1;
