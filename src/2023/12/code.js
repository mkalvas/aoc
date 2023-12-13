import { p2s } from '../../lib';

const score = (pat, cs, pi, ci, hashes, memo) => {
  const key = p2s([pi, ci, hashes]);
  if (memo.has(key)) return memo.get(key);

  if (pi === pat.length) {
    if (ci === cs.length && hashes === 0) return 1;
    else if (ci === cs.length - 1 && cs[ci] === hashes) return 1;
    else return 0;
  }

  let total = 0;
  ['.', '#'].forEach((c) => {
    if (pat[pi] === c || pat[pi] === '?') {
      if (c === '.' && hashes === 0) {
        total += score(pat, cs, pi + 1, ci, 0, memo);
      } else if (
        c === '.' &&
        ci < cs.length &&
        hashes > 0 &&
        cs[ci] === hashes
      ) {
        total += score(pat, cs, pi + 1, ci + 1, 0, memo);
      } else if (c === '#') {
        total += score(pat, cs, pi + 1, ci, hashes + 1, memo);
      }
    }
  });

  memo.set(key, total);
  return total;
};

const constrain = (row) => {
  let memo = new Map();
  let [pattern, constraints] = row.split(' ');
  constraints = constraints.split(',').nums();
  return score(pattern, constraints, 0, 0, 0, memo);
};

export const solutionOne = (input) => input.map(constrain).sum();
export const solutionTwo = (input) =>
  input
    .map((l) => {
      const [pattern, constraints] = l.split(' ');
      return (
        [pattern].repeat(5).join('?') +
        ' ' +
        constraints.split(',').repeat(5).join(',')
      );
    })
    .map(constrain)
    .sum();
