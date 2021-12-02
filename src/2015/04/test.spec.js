import { solutionOne, solutionTwo } from './code';

const INPUT = ['abcdef', 'pqrstuv'];

describe('puzzle one', () => {
  it('Computes the lowest number for a hash with 5 leading zeros', () => {
    expect(solutionOne(INPUT.slice(0, 1))).toEqual(609043);
    expect(solutionOne(INPUT.slice(1, 2))).toEqual(1048970);
  });
});

describe('puzzle two', () => {
  xit('', () => {
    expect(solutionTwo(INPUT)).toEqual(undefined);
  });
});
