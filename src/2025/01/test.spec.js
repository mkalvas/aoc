import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'L68',
  'L30',
  'R48',
  'L5',
  'R60',
  'L55',
  'L1',
  'L99',
  'R14',
  'L82',
];

const INPUT_2 = ['R1000'];

describe('puzzle one', () => {
  it('counts the times the dial lands on 0', () => {
    expect(solutionOne(INPUT)).toEqual(3);
  });
});

describe('puzzle two', () => {
  it('counts all the times the dial passes 0', () => {
    expect(solutionTwo(INPUT)).toEqual(6);
    expect(solutionTwo(INPUT_2)).toEqual(10);
  });
});
