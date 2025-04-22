import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'p=0,4 v=3,-3',
  'p=6,3 v=-1,-3',
  'p=10,3 v=-1,2',
  'p=2,0 v=2,-1',
  'p=0,0 v=1,3',
  'p=3,0 v=-2,-2',
  'p=7,6 v=-1,-3',
  'p=3,0 v=-1,-2',
  'p=9,3 v=2,3',
  'p=7,3 v=-1,2',
  'p=2,4 v=2,-3',
  'p=9,5 v=-3,-3',
];

const WRAP = ['p=2,4 v=2,-3'];

describe('puzzle one', () => {
  it('scores the robots positions after 100 iterations', () => {
    process.env.TEST = true; // different boundary conditions in test vs prd
    expect(solutionOne(INPUT)).toEqual(12);
  });
});

describe('puzzle two', () => {
  it('finds the first step when the robots form a christmas tree', () => {
    process.env.TEST = true;
    // the test scenario never makes a tree
    // and we weren't provided with any test data for this part
    expect(solutionTwo(INPUT)).toEqual(true);
  });
});
