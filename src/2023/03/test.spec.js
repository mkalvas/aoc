import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '467..114..',
  '...*......',
  '..35..633.',
  '......#...',
  '617*......',
  '.....+.58.',
  '..592.....',
  '......755.',
  '...$.*....',
  '.664.598..',
];

describe('puzzle one', () => {
  it('sums the numbers that have adjacent symbols besides "."', () => {
    expect(solutionOne(INPUT)).toEqual(4361);
  });
});

describe('puzzle two', () => {
  it('sums the product of the numbers for symbols that have exactly two adjacent numbers', () => {
    expect(solutionTwo(INPUT)).toEqual(467835);
  });
});
