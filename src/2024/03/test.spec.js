import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))',
];

const INPUT_2 = [
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
];

describe('puzzle one', () => {
  it('sums the results of the mul instructions', () => {
    expect(solutionOne(INPUT_1)).toEqual(161);
  });
});

describe('puzzle two', () => {
  it('sums the results of the enabled mul instructions', () => {
    expect(solutionTwo(INPUT_2)).toEqual(48);
  });
});
