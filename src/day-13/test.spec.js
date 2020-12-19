import { solutionOne, solutionTwo } from './code';

const INPUT = ['939', '7,13,x,x,59,x,31,19'];

const TEST = [
  ['ignored', '3,2'],
  ['ignored', '2,3'],
  ['ignored', '2,x,3'],
  ['ignored', '3,x,2'],
  ['ignored', '7,13'],
  ['ignored', '17,x,13,19'],
  ['ignored', '67,7,59,61'],
  ['ignored', '67,x,7,59,61'],
  ['ignored', '67,7,x,59,61'],
  ['ignored', '1789,37,47,1889'],
];

describe('puzzle one', () => {
  it('finds the best bus to take', () => {
    expect(solutionOne(INPUT)).toBe(295);
  });
});

describe('puzzle two', () => {
  it('finds the best bus to take', () => {
    expect(solutionTwo(INPUT)).toBe(1068781);
    expect(solutionTwo(TEST[0])).toBe(3);
    expect(solutionTwo(TEST[1])).toBe(2);
    expect(solutionTwo(TEST[2])).toBe(4);
    expect(solutionTwo(TEST[3])).toBe(6);
    expect(solutionTwo(TEST[4])).toBe(77);
    expect(solutionTwo(TEST[5])).toBe(3417);
    expect(solutionTwo(TEST[6])).toBe(754018);
    expect(solutionTwo(TEST[7])).toBe(779210);
    expect(solutionTwo(TEST[8])).toBe(1261476);
    expect(solutionTwo(TEST[9])).toBe(1202161486);
  });
});
