import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['.....', '.S-7.', '.|.|.', '.L-J.', '.....'];
const INPUT_2 = ['..F7.', '.FJ|.', 'SJ.L7', '|F--J', 'LJ...'];

const INPUT_3 = [
  '...........',
  '.S-------7.',
  '.|F-----7|.',
  '.||.....||.',
  '.||.....||.',
  '.|L-7.F-J|.',
  '.|..|.|..|.',
  '.L--J.L--J.',
  '...........',
];

const INPUT_4 = [
  '..........',
  '.S------7.',
  '.|F----7|.',
  '.||OOOO||.',
  '.||OOOO||.',
  '.|L-7F-J|.',
  '.|II||II|.',
  '.L--JL--J.',
  '..........',
];

const INPUT_5 = [
  '.F----7F7F7F7F-7....',
  '.|F--7||||||||FJ....',
  '.||.FJ||||||||L7....',
  'FJL7L7LJLJ||LJ.L-7..',
  'L--J.L7...LJS7F-7L7.',
  '....F-J..F7FJ|L7L7L7',
  '....L7.F7||L7|.L7L7|',
  '.....|FJLJ|FJ|F7|.LJ',
  '....FJL-7.||.||||...',
  '....L---J.LJ.LJLJ...',
];

const INPUT_6 = [
  'FF7FSF7F7F7F7F7F---7',
  'L|LJ||||||||||||F--J',
  'FL-7LJLJ||||||LJL-77',
  'F--JF--7||LJLJ7F7FJ-',
  'L---JF-JLJ.||-FJLJJ7',
  '|F|F-JF---7F7-L7L|7|',
  '|FFJF7L7F-JF7|JL---7',
  '7-L-JL7||F7|L7F-7F7|',
  'L.L7LFJ|||||FJL7||LJ',
  'L7JLJL-JLJLJL--JLJ.L',
];

describe('puzzle one', () => {
  it('counts the steps to the furthest point in the loop', () => {
    expect(solutionOne(INPUT_1)).toEqual(4);
    expect(solutionOne(INPUT_2)).toEqual(8);
  });
});

describe('puzzle two', () => {
  it('counts the contained areas', () => {
    expect(solutionTwo(INPUT_3)).toEqual(4);
    expect(solutionTwo(INPUT_4)).toEqual(4);
    expect(solutionTwo(INPUT_5)).toEqual(8);
    expect(solutionTwo(INPUT_6)).toEqual(10);
  });
});
