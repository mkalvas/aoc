import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '987654321111111',
  '811111111111119',
  '234234234234278',
  '818181911112111',
];

describe('puzzle one', () => {
  it('finds the sum of the best joltages for 2 batteries in each bank', () => {
    expect(solutionOne(INPUT)).toEqual(357);
  });
});

describe('puzzle two', () => {
  it('finds the sum of the best joltages for 12 batteries in each bank', () => {
    expect(solutionTwo(INPUT)).toEqual(3121910778619);
  });
});
