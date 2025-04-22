import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['AAAA', 'BBCD', 'BBCC', 'EEEC'];

const INPUT_2 = [
  'RRRRIICCFF',
  'RRRRIICCCF',
  'VVRRRCCFFF',
  'VVRCCCJFFF',
  'VVVVCJJCFE',
  'VVIVCCJJEE',
  'VVIIICJJEE',
  'MIIIIIJJEE',
  'MIIISIJEEE',
  'MMMISSJEEE',
];

const INPUT_3 = ['EEEEE', 'EXXXX', 'EEEEE', 'EXXXX', 'EEEEE'];
const INPUT_4 = ['AAAAAA', 'AAABBA', 'AAABBA', 'ABBAAA', 'ABBAAA', 'AAAAAA'];
const INPUT_5 = ['OOOOO', 'OXOXO', 'OOOOO', 'OXOXO', 'OOOOO'];
const INPUT_6 = ['CB', 'CC', 'AC'];
const INPUT_7 = ['AAAA'];

describe('puzzle one', () => {
  it('finds the price by finding the perimeter of the regions', () => {
    expect(solutionOne(INPUT_1)).toEqual(140);
    expect(solutionOne(INPUT_2)).toEqual(1930);
    expect(solutionOne(INPUT_5)).toEqual(772);
  });
});

describe('puzzle two', () => {
  it('finds the price by counting the sides of the regions', () => {
    expect(solutionTwo(INPUT_6)).toEqual(40);
    expect(solutionTwo(INPUT_7)).toEqual(16);
    expect(solutionTwo(INPUT_1)).toEqual(80);
    expect(solutionTwo(INPUT_2)).toEqual(1206);
    expect(solutionTwo(INPUT_3)).toEqual(236);
    expect(solutionTwo(INPUT_4)).toEqual(368);
  });
});
