import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '7 6 4 2 1',
  '1 2 7 8 9',
  '9 7 6 2 1',
  '1 3 2 4 5',
  '8 6 4 4 1',
  '1 3 6 7 9',
];

describe('puzzle one', () => {
  it('it counts the number of safe levels', () => {
    expect(solutionOne(INPUT)).toEqual(2);
  });
});

describe('puzzle two', () => {
  it('it counts the safe levels allowing one change', () => {
    expect(solutionTwo(INPUT)).toEqual(4);
  });
});
