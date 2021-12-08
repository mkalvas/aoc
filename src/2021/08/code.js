import { difference as diff, sum } from '../../lib';

const parseLine = (line) => line.split(' | ').map((s) => s.split(' '));

const solveLine = ([patterns, digits]) => {
  const entries = patterns.map((p) => new Set(p.split('')));
  const len6 = entries.filter((e) => e.size === 6);
  const len5 = entries.filter((e) => e.size === 5);

  const one = entries.find((e) => e.size === 2);
  const four = entries.find((e) => e.size === 4);
  const seven = entries.find((e) => e.size === 3);
  const eight = entries.find((e) => e.size === 7);
  const six = len6.find((e) => diff(one, e).size === 1);
  const nine = len6.find((e) => diff(e, four).size === 2);
  const five = len5.find((e) => diff(e, six).size === 0);
  const zero = len6.find((e) => diff(e, five).size === 2);
  const three = len5.find((e) => diff(e, five).size === 1);
  const two = len5.find((e) => diff(e, nine).size === 1);

  return +digits
    .map((d) =>
      [zero, one, two, three, four, five, six, seven, eight, nine]
        .map((n) => [...n].sort().join(''))
        .findIndex((n) => n === d.split('').sort().join(''))
        .toString()
    )
    .join('');
};

export const solutionOne = (input) =>
  input
    .map((l) => parseLine(l)[1])
    .flat()
    .filter((s) => [2, 3, 4, 7].includes(s.length)).length;

export const solutionTwo = (input) =>
  sum(input.map(parseLine).map(solveLine).flat());
