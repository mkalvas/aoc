import { solutionOne, solutionTwo } from './code';

const INPUT_ONE = [
  'ugknbfddgicrmopn',
  'aaa',
  'jchzalrnumimnmhp',
  'haegwjzuvuyypxyu',
  'dvszwmarrgswjxmb',
];

const INPUT_TWO = [
  'qjhvhtzxzqqjkmpb',
  'xxyxx',
  'uurcxstgmygtbstg',
  'ieodomkazucvgmuy',
];

describe('puzzle one', () => {
  it('Computes the number of nice strings', () => {
    expect(solutionOne(INPUT_ONE)).toEqual(2);
  });
});

describe('puzzle two', () => {
  it('Computes the number of nice strings', () => {
    expect(solutionTwo(INPUT_TWO)).toEqual(2);
  });
});
