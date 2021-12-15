import { cons, counter, groupLines, numSort } from '../../lib';

const parseInput = (input) => {
  const groups = groupLines(input);
  const chain = groups[0][0].split('');
  return {
    counts: counter(chain),
    pairs: counter(cons(chain).map((p) => p.join(''))),
    reactions: groups[1].reduce((r, l) => {
      const [bind, insert] = l.split(' -> ');
      return { ...r, [bind]: insert };
    }, {}),
  };
};

const polymerize = (steps) => (input) => {
  let { counts, pairs, reactions } = parseInput(input);
  for (let i = 0; i < steps; i++) {
    for (let [[a, b], count] of Object.entries(pairs)) {
      const insert = reactions[`${a}${b}`];
      counts[insert] = (counts[insert] || 0) + count;
      pairs[`${a}${b}`] = (pairs[`${a}${b}`] || 0) - count;
      pairs[`${a}${insert}`] = (pairs[`${a}${insert}`] || 0) + count;
      pairs[`${insert}${b}`] = (pairs[`${insert}${b}`] || 0) + count;
    }
  }
  const sorted = Object.values(counts).sort(numSort);
  return sorted.at(-1) - sorted[0];
};

export const solutionOne = polymerize(10);
export const solutionTwo = polymerize(40);
