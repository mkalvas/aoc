import '../../lib/extensions';
import { aofl } from '../../lib';

const ws = /\s+/g;

const score = (input) =>
  input
    .map((l) => l.split(': ')[1].split(' | '))
    .map((card) => {
      const [winning, have] = card.map((s) => s.trim().split(ws));
      const count = have.filter((m) => winning.includes(m)).length;
      return { score: count > 0 ? 2 ** (count - 1) : 0, count: count };
    });

export const solutionOne = (input) =>
  score(input).reduce((s, { score }) => s + score, 0);

export const solutionTwo = (input) => {
  const scores = score(input).map((e) => e.count);
  let copies = aofl(input.length, () => 1);
  for (const [i, score] of scores.entries()) {
    for (let j = 1; j < Math.min(input.length, score + 1); j++) {
      copies[i + j] += copies[i];
    }
  }
  return copies.sum();
};
