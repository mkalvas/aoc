import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '1 + (2 * 3) + (4 * (5 + 6))',
  '2 * 3 + (4 * 5)',
  '5 + (8 * 3 + 9 + 3 * 4 * 3)',
  '5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))',
  '((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2',
  // '5 + 3 * 4 + (6 + 2 * (6 * 2 + 6 + 3) * 2 * 6 + (9 * 9 * 3)) + 2 + 6',
  // '1 + ((2 + 3) * (2 + 3))',
  // '((2 + 3) * (2 + 3)) + 1',
];

describe('puzzle one', () => {
  it('Sums the evaluation of the expressions', () => {
    expect(solutionOne(INPUT)).toEqual(
      51 + 26 + 437 + 12240 + 13632 /* + 2299 + 26 + 26 */
    );
  });
});

describe('puzzle two', () => {
  it('Sums the evaluation of the expressions', () => {
    expect(solutionTwo(INPUT)).toEqual(51 + 46 + 1445 + 669060 + 23340);
  });
});
