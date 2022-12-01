import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
];

describe('puzzle one', () => {
  it('gets the max total calories for an elf', () => {
    expect(solutionOne(INPUT)).toEqual(24000);
  });
});

describe('puzzle two', () => {
  it('gets the total calories of the largest three elves', () => {
    expect(solutionTwo(INPUT)).toEqual(45000);
  });
});
