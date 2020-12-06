import { solutionOne, solutionTwo } from './code';

const PAIR_1 = 1721;
const PAIR_2 = 299;

const TRIPLE_1 = 979;
const TRIPLE_2 = 366;
const TRIPLE_3 = 675;

const INPUT = [PAIR_1, TRIPLE_1, TRIPLE_2, PAIR_2, TRIPLE_3, 1456];

describe('puzzle one', () => {
  it('finds the pair adding up to 2020 and multiplies them', () => {
    expect(solutionOne(INPUT)).toBe(PAIR_1 * PAIR_2);
  });
});

describe('puzzle two test case', () => {
  it('finds the triple adding up to 2020 and multiplies them', () => {
    expect(solutionTwo(INPUT)).toBe(TRIPLE_1 * TRIPLE_2 * TRIPLE_3);
  });
});
