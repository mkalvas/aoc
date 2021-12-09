import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '2199943210',
  '3987894921',
  '9856789892',
  '8767896789',
  '9899965678',
];

describe('puzzle one', () => {
  it('Sums the heights plus one of all the low points', () => {
    expect(solutionOne(INPUT)).toEqual(15);
  });
});

describe('puzzle two', () => {
  it('Multiplies the size of the three biggest basins', () => {
    expect(solutionTwo(INPUT)).toEqual(1134);
  });
});
