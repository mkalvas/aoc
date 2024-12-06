import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '....#.....',
  '.........#',
  '..........',
  '..#.......',
  '.......#..',
  '..........',
  '.#..^.....',
  '........#.',
  '#.........',
  '......#...',
];

const DOUBLE_TURN = ['......', '..#...', '...#..', '..^...', '..#...'];

describe('puzzle one', () => {
  it('counts the unique spaces visited on the walk', () => {
    expect(solutionOne(DOUBLE_TURN)).toEqual(4);
    expect(solutionOne(INPUT)).toEqual(41);
  });
});

describe('puzzle two', () => {
  it('counts the number of places that would make cycles with an obstacle', () => {
    expect(solutionTwo(DOUBLE_TURN)).toEqual(1);
    expect(solutionTwo(INPUT)).toEqual(6);
  });
});
