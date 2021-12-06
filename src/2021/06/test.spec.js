import { solutionOne, solutionTwo } from './code';

const INPUT = ['3,4,3,1,2'];

describe('puzzle one', () => {
  it('Counts the lanternfish at 80 days', () => {
    expect(solutionOne(INPUT)).toEqual(5934);
  });
});

describe('puzzle two', () => {
  it('Counts the lanternfish at 256 days', () => {
    expect(solutionTwo(INPUT)).toEqual(26984457539);
  });
});
