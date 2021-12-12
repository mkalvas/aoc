import { solutionOne, solutionTwo } from './code';

const INPUT = ['abcdef', 'pqrstuv'];

describe('puzzle one', () => {
  it('Computes the lowest number for a hash with 5 leading zeros', () => {
    // expect(solutionOne([INPUT[0]])).toEqual(609043);
    // expect(solutionOne([INPUT[1]])).toEqual(1048970);
    expect(solutionOne(INPUT)).toEqual(undefined);
  });
});

describe('puzzle two', () => {
  it('', () => {
    expect(solutionTwo(INPUT)).toEqual(undefined);
  });
});
