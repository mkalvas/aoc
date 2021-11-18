import { groupLines } from '../../lib';

const countIfAny = (group) => new Set(group.join('').split('')).size;

const countIfEvery = (group) =>
  group.reduce((set, person) => {
    const chars = new Set(person.split(''));
    if (set === undefined) return chars;
    return new Set([...set].filter((c) => chars.has(c)));
  }, undefined).size;

export const solution = (countingScheme) => (input) =>
  groupLines(input)
    .map((group) => countingScheme(group))
    .reduce((sum, cur) => sum + cur, 0);

export const solutionOne = solution(countIfAny);
export const solutionTwo = solution(countIfEvery);
