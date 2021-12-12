import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '5483143223',
  '2745854711',
  '5264556173',
  '6141336146',
  '6357385478',
  '4167524645',
  '2176841721',
  '6882881134',
  '4846848554',
  '5283751526',
];

describe('puzzle one', () => {
  it('Counts the number of flashes after 100 steps', () => {
    expect(solutionOne(INPUT)).toBe(1656);
  });
});

describe('puzzle two', () => {
  it('Counts the number of cycles it takes for a sync to occur', () => {
    expect(solutionTwo(INPUT)).toEqual(195);
  });
});
