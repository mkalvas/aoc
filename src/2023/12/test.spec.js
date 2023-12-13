import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '???.### 1,1,3',
  '.??..??...?##. 1,1,3',
  '?#?#?#?#?#?#?#? 1,3,1,6',
  '????.#...#... 4,1,1',
  '????.######..#####. 1,6,5',
  '?###???????? 3,2,1',
];

describe('puzzle one', () => {
  it('sums the total number of arrangements of springs', () => {
    expect(solutionOne(INPUT)).toEqual(21);
  });
});

describe('puzzle two', () => {
  it('sums the total number of arrangements of springs', () => {
    expect(solutionTwo(INPUT)).toEqual(525152);
  });
});
