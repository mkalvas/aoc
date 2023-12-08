import { solutionOne, solutionTwo } from './code';

const INPUT = ['Time:      7  15   30', 'Distance:  9  40  200'];

describe('puzzle one', () => {
  it('finds the product of the number of ways to win', () => {
    expect(solutionOne(INPUT)).toEqual(288);
  });
});

describe('puzzle two', () => {
  it('finds the product of the number of ways to win', () => {
    expect(solutionTwo(INPUT)).toEqual(71503);
  });
});
