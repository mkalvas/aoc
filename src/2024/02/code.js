import { diffs, wssv } from '../../lib';

const parse = (report) => wssv(report).nums();

const safe = (level) =>
  level.monotonic(true) &&
  diffs(level)
    .map(Math.abs)
    .every((d) => 0 < d && d <= 3);

export const solutionOne = (input) => input.map(parse).filter(safe).length;

export const solutionTwo = (input) =>
  input.map(parse).filter((level) => {
    for (let i = 0; i < level.length; i++) {
      if (safe(level.cut(i))) return true;
    }
  }).length;
