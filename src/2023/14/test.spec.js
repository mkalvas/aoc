import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'O....#....',
  'O.OO#....#',
  '.....##...',
  'OO.#O....O',
  '.O.....O#.',
  'O.#..O.#.#',
  '..O..#O..O',
  '.......O..',
  '#....###..',
  '#OO..#....',
];

describe('puzzle one', () => {
  it('finds the load on the north beams', () => {
    expect(solutionOne(INPUT)).toEqual(136);
  });
});

describe('puzzle two', () => {
  it('finds the load on the north beams after 1,000,000,000 cycles', () => {
    expect(solutionTwo(INPUT)).toEqual(64);
  });
});
