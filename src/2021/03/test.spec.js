import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

describe('puzzle one', () => {
  it('Calculates the power consumption of the submarine', () => {
    expect(solutionOne(INPUT)).toEqual(198);
  });
});

describe('puzzle two', () => {
  it('Calculates the life support rating of the submarine', () => {
    expect(solutionTwo(INPUT)).toEqual(230);
  });
});
