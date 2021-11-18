import { solutionOne, solutionTwo } from './code';
import { getFileLines } from '../../lib';

const INPUT_1 = [
  'class: 1-3 or 5-7',
  'row: 6-11 or 33-44',
  'seat: 13-40 or 45-50',
  '',
  'your ticket:',
  '7,1,14',
  '',
  'nearby tickets:',
  '7,3,47',
  '40,4,50',
  '55,2,20',
  '38,6,12',
];

const INPUT_2 = [
  'class: 0-1 or 4-19',
  'row: 0-5 or 8-19',
  'seat: 0-13 or 16-19',
  '',
  'your ticket:',
  '11,12,13',
  '',
  'nearby tickets:',
  '3,9,18',
  '15,1,5',
  '5,14,9',
];

const INPUT_3 = [
  'departure lane: 0-1 or 100-200',
  'row: 5-10 or 50-60',
  'seat: 20-30 or 40-45',
  '',
  'your ticket:',
  '7,11,13',
  '',
  'nearby tickets:',
  '1,5,20',
  '1,5,20',
  '1,5,20',
];

describe('puzzle one', () => {
  it('finds the error rate', () => {
    expect(solutionOne(INPUT_1)).toBe(71);
  });
});

describe('puzzle two', () => {
  it('finds the field mapping', () => {
    expect(solutionTwo(INPUT_2)).toBe(1);
    expect(solutionTwo(INPUT_3)).toBe(7);
    expect(solutionTwo(getFileLines(`${__dirname}/input.txt`))).toBe(
      491924517533
    );
  });
});
