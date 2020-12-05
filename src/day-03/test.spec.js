import { puzzleOne, puzzleTwo } from './code';

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

it('solves the first puzzle test case', () => {
  expect(puzzleOne(INPUT)).toBe(7);
});

it('solves the second puzzle test case', () => {
  expect(puzzleTwo(INPUT)).toBe(336);
});
