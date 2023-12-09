import '../../lib/extensions';

const extrapolate = (line) => {
  const ns = line.split(' ').nums();
  let seqs = [ns];
  let curr = ns;

  while (curr.some((n) => n !== 0)) {
    let next = [];
    for (let i = 1; i < curr.length; i++) next.push(curr[i] - curr[i - 1]);
    seqs.push(next);
    curr = next;
  }

  for (let i = seqs.length - 1; i > 0; i--) {
    seqs[i - 1].push(seqs[i].at(-1) + seqs[i - 1].at(-1));
    seqs[i - 1].unshift(seqs[i - 1][0] - seqs[i][0]);
  }

  return [seqs[0][0], seqs[0].at(-1)];
};

export const solutionOne = (input) => input.map((l) => extrapolate(l)[1]).sum();
export const solutionTwo = (input) => input.map((l) => extrapolate(l)[0]).sum();
