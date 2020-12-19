import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'abc',
  '',
  'a',
  'b',
  'c',
  '',
  'ab',
  'ac',
  '',
  'a',
  'a',
  'a',
  'a',
  '',
  'b',
];

describe('puzzle one', () => {
  it('counts if anyone in the group has declared the item', () => {
    expect(solutionOne(INPUT)).toBe(11);
  });
});

describe('puzzle two', () => {
  it('counts if everyone in the group has declared the item', () => {
    expect(solutionTwo(INPUT)).toBe(6);
  });
});
