import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '1163751742',
  '1381373672',
  '2136511328',
  '3694931569',
  '7463417111',
  '1319128137',
  '1359912421',
  '3125421639',
  '1293138521',
  '2311944581',
];

describe('puzzle one', () => {
  it('Finds the lowest total path', () => {
    expect(solutionOne(INPUT)).toEqual(40);
  });
});

describe('puzzle two', () => {
  it('Finds the lowest total path', () => {
    expect(solutionTwo(INPUT)).toEqual(315);
  });
});
