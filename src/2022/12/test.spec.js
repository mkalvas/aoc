import { solutionOne, solutionTwo } from './code';

const INPUT = ['Sabqponm', 'abcryxxl', 'accszExk', 'acctuvwj', 'abdefghi'];

describe('puzzle one', () => {
  it('Finds the shortest path', () => {
    expect(solutionOne(INPUT)).toEqual(31);
  });
});

describe('puzzle two', () => {
  it('Finds the shortest path of all starting locations', () => {
    expect(solutionTwo(INPUT)).toEqual(29);
  });
});
