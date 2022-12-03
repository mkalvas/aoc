import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

describe('puzzle one', () => {
  it('finds the sum of the priorities of the common item', () => {
    expect(solutionOne(INPUT)).toEqual(157);
  });
});

describe('puzzle two', () => {
  it('finds the sum of the priorities of the common item', () => {
    expect(solutionTwo(INPUT)).toEqual(70);
  });
});
