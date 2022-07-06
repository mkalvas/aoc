import { solutionOne, solutionTwo } from './code';

const INPUT = ['target area: x=20..30, y=-10..-5'];

describe('puzzle one', () => {
  it('Finds the highest Y position that still hits the target area', () => {
    // initial velocity for this solution [6, 9]
    expect(solutionOne(INPUT)).toEqual(45);
  });
});

describe('puzzle two', () => {
  it('Finds the number of distinct trajectories that hit the target', () => {
    expect(solutionTwo(INPUT)).toEqual(112);
  });
});

const EXAMPLE_PLOT = `
.....................#.........
.....................#.........
...............................
.....................#.........
...............................
...............................
.....................#.........
...............................
...............................
...............................
....................##.........
...............................
...............................
...............................
...............................
..................#..#.........
...............................
...............................
...............................
...............................
...............................
...............#.....#.........
...............................
...............................
...............................
...............................
...............................
...............................
...........#.........#.........
...............................
...............................
...............................
...............................
...............................
...............................
...............................
......#..............#.........
...............................
...............................
...............................
...............................
...............................
...............................
...............................
...............................
S....................#.........
...............................
...............................
...............................
...............................
....................TTTTTTTTTTT
....................TTTTTTTTTTT
....................TTTTTTTTTTT
....................TTTTTTTTTTT
....................TTTTTTTTTTT
....................T#TTTTTTTTT
`;

const FINAL_SET = [
  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8],
  [6, 9],
  [7, -1],
  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  [8, -1],
  [8, -2],
  [8, 0],
  [8, 1],
  [9, -1],
  [9, -2],
  [9, 0],
  [10, -1],
  [10, -2],
  [11, -1],
  [11, -2],
  [11, -3],
  [11, -4],
  [12, -2],
  [12, -3],
  [12, -4],
  [13, -2],
  [13, -3],
  [13, -4],
  [14, -2],
  [14, -3],
  [14, -4],
  [15, -2],
  [15, -3],
  [15, -4],
];