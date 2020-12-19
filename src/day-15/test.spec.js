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
    expect(solutionOne(TESTS[0])).toEqual(436);
    expect(solutionOne(TESTS[1])).toEqual(1);
    expect(solutionOne(TESTS[2])).toEqual(10);
    expect(solutionOne(TESTS[3])).toEqual(27);
    expect(solutionOne(TESTS[4])).toEqual(78);
    expect(solutionOne(TESTS[5])).toEqual(438);
    expect(solutionOne(TESTS[6])).toEqual(1836);
  });
});

describe('puzzle two', () => {
  it('returns the 30000000th number in the game sequence', () => {
    expect(true).toBe(true);
    expect(solutionTwo(TESTS[0])).toEqual(175594);
    expect(solutionTwo(TESTS[1])).toEqual(2578);
    expect(solutionTwo(TESTS[2])).toEqual(3544142);
    expect(solutionTwo(TESTS[3])).toEqual(261214);
    expect(solutionTwo(TESTS[4])).toEqual(6895259);
    expect(solutionTwo(TESTS[5])).toEqual(18);
    expect(solutionTwo(TESTS[6])).toEqual(362);
  });
});
