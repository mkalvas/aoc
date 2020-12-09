import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'nop +0',
  'acc +1',
  'jmp +4',
  'acc +3',
  'jmp -3',
  'acc -99',
  'acc +1',
  'jmp -4',
  'acc +6',
];

describe('puzzle one', () => {
  it('returns the value of the acc when we detect a loop', () => {
    expect(solutionOne(INPUT)).toEqual(5);
  });
});

describe('puzzle two', () => {
  it('fixes the right instruction and returns the acc', () => {
    expect(solutionTwo(INPUT)).toEqual(8);
  });
});
