import { solutionOne, solutionTwo } from './code';

const INPUT = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];

const TEST_CASE = ['FFFFFFFLLR', 'FFFFFFFLRR'];

describe('puzzle one', () => {
  it('finds the maximum seat number on the plane', () => {
    expect(solutionOne(INPUT)).toBe(820);
  });
});

describe('puzzle two', () => {
  it('finds the missing seat number on the plane', () => {
    expect(solutionTwo(TEST_CASE)).toBe(2);
  });
});
