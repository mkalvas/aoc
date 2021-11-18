const parseInput = (input) => input[0].split(',').map((i) => Number(i));

const getNthNumber = (numbers, limit) => {
  let indices = new Map(numbers.map((value, i) => [value, i + 1]));
  let last = numbers[numbers.length - 1];
  let bucket = last;

  for (let i = numbers.length; i < limit; i++) {
    last = indices.has(last) ? i - indices.get(last) : 0;
    indices.set(bucket, i);
    bucket = last;
  }

  return last;
};

const solution = (n) => (input) => getNthNumber(parseInput(input), n);

export const solutionOne = solution(2020);
export const solutionTwo = solution(30000000);
