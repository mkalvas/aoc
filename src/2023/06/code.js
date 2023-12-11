import { quad, zip } from '../../lib';

const parseMulti = (input) => {
  const times = input[0].split(/\s+/g).slice(1).nums();
  const dists = input[1].split(/\s+/g).slice(1).nums();
  return zip(times, dists);
};

const parseSingle = (input) => [
  [+input[0].replace(/[^\d]/g, ''), +input[1].replace(/[^\d]/g, '')],
];

const span = ([time, record]) => {
  const [l, r] = quad(1, -time, record + 1);
  return Math.floor(r) - Math.ceil(l) + 1;
};

export const solutionOne = (input) => parseMulti(input).map(span).product();
export const solutionTwo = (input) => parseSingle(input).map(span)[0];
