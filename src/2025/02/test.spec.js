import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124',
];

describe('puzzle one', () => {
  it('Sum of invalid IDs with exactly twice repetition', () => {
    expect(solutionOne(INPUT)).toEqual(1227775554);
  });
});

describe('puzzle two', () => {
  it('Sum of invalid IDs with at least twice repetition', () => {
    expect(solutionTwo(INPUT)).toEqual(4174379265);
  });
});
