import { solutionOne, solutionTwo } from './code';

const INPUT = ['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'];

describe('puzzle one', () => {
  it('extrapolates the sequence forward', () => {
    expect(solutionOne(INPUT)).toEqual(114);
  });
});

describe('puzzle two', () => {
  it('extrapolates the sequence backward', () => {
    expect(solutionTwo(INPUT)).toEqual(2);
  });
});
