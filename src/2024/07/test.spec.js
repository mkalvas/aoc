import { solutionOne, solutionTwo } from './code';

const TEST = ['10: 5 5', '10: 2 2 6'];

const INPUT = [
  '190: 10 19',
  '3267: 81 40 27',
  '83: 17 5',
  '156: 15 6',
  '7290: 6 8 6 15',
  '161011: 16 10 13',
  '192: 17 8 14',
  '21037: 9 7 18 13',
  '292: 11 6 16 20',
];

const EDGE = ['156: 15 6'];

describe('puzzle one', () => {
  it('Finds the valid lines using + and *', () => {
    expect(solutionOne(TEST)).toEqual(20);
    expect(solutionOne(INPUT)).toEqual(3749);
  });
});

describe('puzzle two', () => {
  it('Finds the valid lines using +, *, and || (as concat)', () => {
    expect(solutionTwo(INPUT)).toEqual(11387);
    expect(solutionTwo(EDGE)).toEqual(156);
  });
});
