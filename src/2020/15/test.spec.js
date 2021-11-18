import { solutionOne, solutionTwo } from './code';

const TESTS = [
  ['0,3,6'],
  ['1,3,2'],
  ['2,1,3'],
  ['1,2,3'],
  ['2,3,1'],
  ['3,2,1'],
  ['3,1,2'],
];

describe('puzzle one', () => {
  it('returns the 2020th number in the game sequence', () => {
    expect(solutionOne(TESTS[0])).toBe(436);
    expect(solutionOne(TESTS[1])).toBe(1);
    expect(solutionOne(TESTS[2])).toBe(10);
    expect(solutionOne(TESTS[3])).toBe(27);
    expect(solutionOne(TESTS[4])).toBe(78);
    expect(solutionOne(TESTS[5])).toBe(438);
    expect(solutionOne(TESTS[6])).toBe(1836);
  });
});

describe('puzzle two', () => {
  it('returns the 30000000th number in the game sequence', () => {
    expect(true).toBe(true);
    expect(solutionTwo(TESTS[0])).toBe(175594);
    expect(solutionTwo(TESTS[1])).toBe(2578);
    expect(solutionTwo(TESTS[2])).toBe(3544142);
    expect(solutionTwo(TESTS[3])).toBe(261214);
    expect(solutionTwo(TESTS[4])).toBe(6895259);
    expect(solutionTwo(TESTS[5])).toBe(18);
    expect(solutionTwo(TESTS[6])).toBe(362);
  });
});
