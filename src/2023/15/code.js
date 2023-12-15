import { chars, ord } from '../../lib';

const parse = (input, fn) => input.flatMap((l) => l.split(',').map(fn));
const hash = (s) => chars(s).reduce((h, c) => ((h + ord(c)) * 17) % 256, 0);

export const solutionOne = (input) => parse(input, hash).sum();
export const solutionTwo = (input) => {
  let steps = parse(input, (s) => ({
    label: s.replace(/[^a-z]/g, ''),
    op: s.replace(/[a-z0-9]/g, ''),
    focus: +s.replace(/[^0-9]/g, ''),
    hash: hash(s.replace(/[^a-z]/g, '')),
  }));

  let boxes = {};
  for (let { label, op, focus, hash } of steps) {
    let idx = boxes[hash]?.findIndex((l) => l.label === label) ?? -1;
    if (op === '-' && idx >= 0) boxes[hash].splice(idx, 1);
    else if (op === '=') {
      const lens = { label, focus };
      if (idx >= 0) boxes[hash][idx] = lens;
      else if (boxes[hash]) boxes[hash].push(lens);
      else boxes[hash] = [lens];
    }
  }

  return Object.entries(boxes)
    .map(([k, v]) => v.map((l, j) => (+k + 1) * (j + 1) * l.focus).sum())
    .sum();
};
