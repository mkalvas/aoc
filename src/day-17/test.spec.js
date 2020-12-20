import { solutionOne, solutionTwo } from './code';

const INPUT = ['.#.', '..#', '###'];

describe('puzzle one', () => {
  it('counts the active cubes', () => {
    expect(solutionOne(INPUT)).toBe(112);
  });
});

describe('puzzle two', () => {
  it('counts the active hypercubes', () => {
    expect(solutionTwo(INPUT)).toBe(848);
  });
});
