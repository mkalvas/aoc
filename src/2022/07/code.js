import { accumulate, sum, vals } from '../../lib';

const getFileSizes = (input) => {
  const dirs = { '/': 0 };
  let path = [];

  for (let line of input) {
    const args = line.split(' ');
    if (line === '$ cd /') {
      path = ['/'];
    } else if (line === '$ cd ..') {
      path.pop();
    } else if (line.startsWith('$ cd ')) {
      path.push(args[2] + '/');
    } else if (/^\d+/.test(line)) {
      accumulate(path).forEach((d) => (dirs[d] = (dirs[d] ?? 0) + +args[0]));
    }
  }

  return dirs;
};

export const solutionOne = (input) =>
  vals(getFileSizes(input))
    .filter((v) => v <= 100_000)
    .sum();

export const solutionTwo = (input) => {
  const dirs = getFileSizes(input);
  return vals(dirs)
    .filter((v) => v >= dirs['/'] - 40_000_000)
    .min();
};
