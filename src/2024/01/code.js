import { counter, diffs } from '../../lib/functions/array';

const parse = (input) => [
  input.map((l) => +l.split('   ')[0]).asc(),
  input.map((l) => +l.split('   ')[1]).asc(),
];

export const solutionOne = (input) => {
  const [a, b] = parse(input);
  return a
    .zip(b)
    .map((p) => Math.abs(p[0] - p[1]))
    .sum();
};

export const solutionTwo = (input) => {
  const [a, b] = parse(input);
  const counts = counter(b);
  return a.reduce((acc, n) => acc + (counts[n] ?? 0) * n, 0);
};
