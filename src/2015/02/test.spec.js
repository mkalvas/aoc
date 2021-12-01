import { solutionOne, solutionTwo } from './code';

const INPUT = ['2x3x4', '1x1x10'];

describe('puzzle one', () => {
  it('Calculates the wrapping paper needed', () => {
    expect(solutionOne(INPUT)).toEqual(58 + 43);
  });
});

describe('puzzle two', () => {
  it('Calculates the length of ribbon needed', () => {
    expect(solutionTwo(INPUT)).toEqual(34 + 14);
  });
});
