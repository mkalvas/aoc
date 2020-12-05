import { parseData, puzzleOne, puzzleTwo } from './code';

const INPUT = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];

const PUZZLE_TWO_TEST_CASE = ['FFFFFFFLLR', 'FFFFFFFLRR'];

it('solves the first puzzle test case', () => {
  expect(parseData(INPUT)).toEqual([
    { row: 44, col: 5, id: 357 },
    { row: 70, col: 7, id: 567 },
    { row: 14, col: 7, id: 119 },
    { row: 102, col: 4, id: 820 },
  ]);
  expect(puzzleOne(INPUT)).toEqual(820);
});

it('solves the second puzzle test case', () => {
  expect(puzzleTwo(PUZZLE_TWO_TEST_CASE)).toEqual(2);
});
