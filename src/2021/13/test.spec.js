import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '6,10',
  '0,14',
  '9,10',
  '0,3',
  '10,4',
  '4,11',
  '6,0',
  '6,12',
  '4,1',
  '0,13',
  '10,12',
  '3,4',
  '3,0',
  '8,4',
  '1,10',
  '2,14',
  '8,10',
  '9,0',
  '',
  'fold along y=7',
  'fold along x=5',
];

// I changed the symbols. The problem has them as `#` and `.`
const ASCII = `
11111
10001
10001
10001
11111
00000
00000
`.trim();

describe('puzzle one', () => {
  it('Counts the number of dots visible after the first fold', () => {
    expect(solutionOne(INPUT)).toEqual(17);
  });
});

describe('puzzle two', () => {
  it('Completes all the folds and returns the ASCII art', () => {
    expect(solutionTwo(INPUT)).toEqual(ASCII);
  });
});
