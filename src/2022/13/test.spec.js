import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '[1,1,3,1,1]',
  '[1,1,5,1,1]',
  '',
  '[[1],[2,3,4]]',
  '[[1],4]',
  '',
  '[9]',
  '[[8,7,6]]',
  '',
  '[[4,4],4,4]',
  '[[4,4],4,4,4]',
  '',
  '[7,7,7,7]',
  '[7,7,7]',
  '',
  '[]',
  '[3]',
  '',
  '[[[]]]',
  '[[]]',
  '',
  '[1,[2,[3,[4,[5,6,7]]]],8,9]',
  '[1,[2,[3,[4,[5,6,0]]]],8,9]',
];

describe('puzzle one', () => {
  it('Sums the indices of the ordered pairs', () => {
    expect(solutionOne(INPUT)).toEqual(13);
  });
});

describe('puzzle two', () => {
  it('Multiplies the indices of the divider packets', () => {
    expect(solutionTwo(INPUT)).toEqual(140);
  });
});
