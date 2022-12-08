import { solutionOne, solutionTwo } from './code';

const INPUT = ['30373', '25512', '65332', '33549', '35390'];

describe('puzzle one', () => {
  it('Counts visible trees', () => {
    expect(solutionOne(INPUT)).toEqual(21);
  });
});

describe('puzzle two', () => {
  it('Finds the tree with the highest scenic score', () => {
    expect(solutionTwo(INPUT)).toEqual(8);
  });
});
