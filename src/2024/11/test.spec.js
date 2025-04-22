import { solutionOne, solutionTwo } from './code';

const INPUT = ['125 17'];

describe('puzzle one', () => {
  it('count of split rocks after 25 blinks', () => {
    expect(solutionOne(INPUT)).toEqual(55312);
  });
});

describe('puzzle two', () => {
  it('count of split rocks after 75 blinks', () => {
    expect(solutionTwo(INPUT)).toEqual(65601038650482);
  });
});
