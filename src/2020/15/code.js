const parseInput = (input) => input[0].split(',').map((i) => Number(i));

const getNthNumber = (numbers, limit) => {
  let indices = new Uint32Array(limit);
  numbers.forEach((value, i) => (indices[value] = i + 1));
  let last = numbers[numbers.length - 1];

  for (let i = numbers.length; i < limit; i++) {
    const val = indices[last];
    indices[last] = i;
    last = val ? i - val : 0;
  }

  return last;
};

const solution = (n) => (input) => getNthNumber(parseInput(input), n);

export const solutionOne = solution(2020);
export const solutionTwo = solution(30000000);
