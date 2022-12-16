import { solutionOne, solutionTwo } from './code';

const INPUT = ['498,4 -> 498,6 -> 496,6', '503,4 -> 502,4 -> 502,9 -> 494,9'];

describe('puzzle one', () => {
  it('Counts the sand that comes to rest before falling into the abyss', () => {
    expect(solutionOne(INPUT)).toEqual(24);
  });
});

describe('puzzle two', () => {
  it('Counts the sand that fills the cavern', () => {
    expect(solutionTwo(INPUT)).toEqual(93);
  });
});
