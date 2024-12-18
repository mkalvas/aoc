import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  '............',
  '........0...',
  '.....0......',
  '.......0....',
  '....0.......',
  '......A.....',
  '............',
  '............',
  '........A...',
  '.........A..',
  '............',
  '............',
];

const INPUT_2 = [
  'T....#....',
  '...T......',
  '.T....#...',
  '.........#',
  '..#.......',
  '..........',
  '...#......',
  '..........',
  '....#.....',
  '..........',
];

describe('puzzle one', () => {
  it('counts the first antinodes on either sides of the nodes', () => {
    expect(solutionOne(INPUT_1)).toEqual(14);
  });
});

describe('puzzle two', () => {
  it('counts all the antinodes', () => {
    expect(solutionTwo(INPUT_1)).toEqual(34);
    expect(solutionTwo(INPUT_2)).toEqual(9);
  });
});
