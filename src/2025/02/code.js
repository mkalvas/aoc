const DOUBLE = /^(\d+)\1$/g;
const AT_LEAST_TWICE = /^(\d+)(\1)+$/g;

const solve = (input, pattern) => {
  let sum = 0;
  for (const r of input[0].split(',')) {
    let [start, end] = r.split('-').map(Number);
    for (let n = start; n <= end; n++) {
      if (pattern.test(`${n}`)) sum += n;
    }
  }
  return sum;
};

export const solutionOne = (input) => solve(input, DOUBLE);
export const solutionTwo = (input) => solve(input, AT_LEAST_TWICE);
