import '../../lib/extensions';

const find = (stream, size) => {
  for (let [i, window] of stream.cons(size).entries()) {
    if (new Set(window).size === size) return i + size;
  }
};

export const solutionOne = (input) => find(input[0].split(''), 4);
export const solutionTwo = (input) => find(input[0].split(''), 14);
