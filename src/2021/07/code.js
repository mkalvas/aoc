import { gauss, mean, median, numSort, sum } from '../../lib';

const boundedMean = (seq) => {
  const m = mean(seq);
  return [Math.floor(m), Math.ceil(m)];
};

export const solutionOne = (input) => {
  const seq = input[0].split(',').map(Number).sort(numSort);
  const med = median(seq, true);
  return sum(seq.map((pos) => Math.abs(med - pos)));
};

export const solutionTwo = (input) => {
  const seq = input[0].split(',').map(Number).sort(numSort);
  const [m1, m2] = boundedMean(seq);
  return Math.min(
    sum(seq.map((pos) => gauss(Math.abs(m1 - pos)))),
    sum(seq.map((pos) => gauss(Math.abs(m2 - pos))))
  );
};
