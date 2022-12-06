const solve = (stream, size) => {
  for (let i = size - 1; i < stream.length; i++) {
    const uniq = new Set([...stream.slice(i - (size - 1), i + 1)]);
    if (uniq.size === size) return i + 1;
  }
};

export const solutionOne = (input) => solve(input[0].split(''), 4);
export const solutionTwo = (input) => solve(input[0].split(''), 14);
