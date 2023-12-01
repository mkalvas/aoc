import { solutionOne, solutionTwo } from './code';

const INPUT = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
const INPUT_2 = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
];

const TWONE = ['twone'];
const RECURSIVE_MAYBE = ['tdszrfzspthree2ttzseven5seven'];

describe('puzzle one', () => {
  it('sums the concatenation of the first and last digit', () => {
    expect(solutionOne(INPUT)).toEqual(142);
  });
});

describe('puzzle two', () => {
  it('sums the concatenation of the first and last digit with words', () => {
    expect(solutionTwo(INPUT_2)).toEqual(281);
    expect(solutionTwo(TWONE)).toEqual(21);
    expect(solutionTwo(RECURSIVE_MAYBE)).toEqual(37);
  });
});
