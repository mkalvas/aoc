import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '...#......',
  '.......#..',
  '#.........',
  '..........',
  '......#...',
  '.#........',
  '.........#',
  '..........',
  '.......#..',
  '#...#.....',
];

describe('puzzle one', () => {
  it('Sums the distance between each star combination', () => {
    expect(solutionOne(INPUT)).toEqual(374);
  });
});

describe('puzzle two', () => {
  it('Sums the distance between each star combination', () => {
    expect(solutionTwo(INPUT, 10)).toEqual(1030);
    expect(solutionTwo(INPUT, 100)).toEqual(8410);
  });
});
