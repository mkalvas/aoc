import { solutionOne, solutionTwo } from './code';

const INPUT = ['3   4', '4   3', '2   5', '1   3', '3   9', '3   3'];

describe('puzzle one', () => {
  it('finds the abs between the sorted lists on left and right', () => {
    expect(solutionOne(INPUT)).toEqual(11);
  });
});

describe('puzzle two', () => {
  it('it finds the similarity score between the sorted lists on left and right', () => {
    expect(solutionTwo(INPUT)).toEqual(31);
  });
});
