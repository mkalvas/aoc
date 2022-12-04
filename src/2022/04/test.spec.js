import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
];

describe('puzzle one', () => {
  it('Counts fully contined pairs', () => {
    expect(solutionOne(INPUT)).toEqual(2);
  });
});

describe('puzzle two', () => {
  it('Counts overlapping pairs', () => {
    expect(solutionTwo(INPUT)).toEqual(4);
  });
});
