import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '#.##..##.',
  '..#.##.#.',
  '##......#',
  '##......#',
  '..#.##.#.',
  '..##..##.',
  '#.#.##.#.',
  '',
  '#...##..#',
  '#....#..#',
  '..##..###',
  '#####.##.',
  '#####.##.',
  '..##..###',
  '#....#..#',
];

describe('puzzle one', () => {
  it('summarizes the reflection scores of the groups', () => {
    expect(solutionOne(INPUT)).toEqual(405);
  });
});

describe('puzzle two', () => {
  it('summarizes the reflection scores of the groups with smudges', () => {
    expect(solutionTwo(INPUT)).toEqual(400);
  });
});
