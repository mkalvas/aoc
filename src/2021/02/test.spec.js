import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

describe('puzzle one', () => {
  it('Calculates the multiple of the depth and distance', () => {
    expect(solutionOne(INPUT)).toEqual(150);
  });
});

describe('puzzle two', () => {
  it('Calculates the multiple of the depth and distance', () => {
    expect(solutionTwo(INPUT)).toEqual(900);
  });
});
