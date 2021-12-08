import { solutionOne, solutionTwo } from './code';

const INPUT = ['16,1,2,0,4,2,7,1,2,14'];

describe('puzzle one', () => {
  it('Calculates the needed fuel', () => {
    expect(solutionOne(INPUT)).toEqual(37);
  });
});

describe('puzzle two', () => {
  it('Calculates the needed fuel with increasing burn rate', () => {
    expect(solutionTwo(INPUT)).toEqual(168);
  });
});
