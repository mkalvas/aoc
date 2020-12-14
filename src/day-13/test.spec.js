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
    expect(solutionOne(INPUT)).toEqual(295);
  });
});

describe('puzzle two', () => {
  it('finds the best bus to take', () => {
    expect(solutionTwo(INPUT)).toEqual(1068781);
    expect(solutionTwo(TEST[0])).toEqual(3);
    expect(solutionTwo(TEST[1])).toEqual(2);
    expect(solutionTwo(TEST[2])).toEqual(4);
    expect(solutionTwo(TEST[3])).toEqual(6);
    expect(solutionTwo(TEST[4])).toEqual(77);
    expect(solutionTwo(TEST[5])).toEqual(3417);
    expect(solutionTwo(TEST[6])).toEqual(754018);
    expect(solutionTwo(TEST[7])).toEqual(779210);
    expect(solutionTwo(TEST[8])).toEqual(1261476);
    expect(solutionTwo(TEST[9])).toEqual(1202161486);
  });
});
