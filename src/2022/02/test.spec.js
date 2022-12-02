import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['A Y', 'B X', 'C Z', 'C X', 'A Z'];
const INPUT_2 = ['A Y', 'B X', 'C Z'];

describe('puzzle one', () => {
  it('calculates your total score', () => {
    expect(solutionOne(INPUT_1)).toEqual(25);
  });
});

describe('puzzle two', () => {
  it('caluclates your total score', () => {
    expect(solutionTwo(INPUT_2)).toEqual(12);
  });
});
