import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
  'mem[8] = 11',
  'mem[7] = 101',
  'mem[8] = 0',
];

const INPUT_2 = [
  'mask = 000000000000000000000000000000X1001X',
  'mem[42] = 100',
  'mask = 00000000000000000000000000000000X0XX',
  'mem[26] = 1',
];

describe('puzzle one', () => {
  it('masks and sums the memory addresses', () => {
    expect(solutionOne(INPUT_1)).toBe('165');
  });
});

describe('puzzle two', () => {
  it('masks and sums the memory addresses', () => {
    expect(solutionTwo(INPUT_2)).toBe('208');
  });
});
