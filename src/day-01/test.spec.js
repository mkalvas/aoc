import { puzzleOne, puzzleTwo } from './code';

const PAIR_1 = 1721;
const PAIR_2 = 299;

const TRIPLE_1 = 979;
const TRIPLE_2 = 366;
const TRIPLE_3 = 675;

const INPUT = [PAIR_1, TRIPLE_1, TRIPLE_2, PAIR_2, TRIPLE_3, 1456];

it('solves the first puzzle test case', () => {
  expect(puzzleOne(INPUT)).toEqual({
    set: [PAIR_1, PAIR_2],
    multiple: PAIR_1 * PAIR_2,
  });
});

it('solves the second puzzle test case', () => {
  expect(puzzleTwo(INPUT)).toEqual({
    set: [TRIPLE_1, TRIPLE_2, TRIPLE_3],
    multiple: TRIPLE_1 * TRIPLE_2 * TRIPLE_3,
  });
});
