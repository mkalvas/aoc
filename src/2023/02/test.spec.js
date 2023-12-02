import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
];

describe('puzzle one', () => {
  it('sums the ids of valid games', () => {
    expect(solutionOne(INPUT)).toEqual(8);
  });
});

describe('puzzle two', () => {
  it('sums the product of the fewest cubes that would make the game valid', () => {
    expect(solutionTwo(INPUT)).toEqual(2286);
  });
});
