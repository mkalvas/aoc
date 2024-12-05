import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['..X...', '.SAMX.', '.A..A.', 'XMAS.S', '.X....'];

const INPUT_2 = [
  'MMMSXXMASM',
  'MSAMXMSMSA',
  'AMXSXMAAMM',
  'MSAMASMSMX',
  'XMASAMXAMM',
  'XXAMMXXAMA',
  'SMSMSASXSS',
  'SAXAMASAAA',
  'MAMMMXMMMM',
  'MXMXAXMASX',
];

describe('puzzle one', () => {
  it('finds XMAS in the word search', () => {
    expect(solutionOne(INPUT_1)).toEqual(4);
    expect(solutionOne(INPUT_2)).toEqual(18);
  });
});

describe('puzzle two', () => {
  it('finds MAS in X formation in the word search', () => {
    expect(solutionTwo(INPUT_2)).toEqual(9);
  });
});
