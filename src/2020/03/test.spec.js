import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#',
];

describe('puzzle one', () => {
  it('counts the trees encountered for slope (3, 1)', () => {
    expect(solutionOne(INPUT)).toBe(7);
  });
});

describe('puzzle two', () => {
  it('counts the trees encountered for each slope and multiplies them', () => {
    expect(solutionTwo(INPUT)).toBe(336);
  });
});
