import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['R 4', 'U 4', 'L 3', 'D 1', 'R 4', 'D 1', 'L 5', 'R 2'];
const INPUT_2 = ['R 5', 'U 8', 'L 8', 'D 3', 'R 17', 'D 10', 'L 25', 'U 20'];

describe('puzzle one', () => {
  it('Counts the squares the tail touched', () => {
    expect(solutionOne(INPUT_1)).toEqual(13);
  });
});

describe('puzzle two', () => {
  it('Counts the squares the ninth tail touched', () => {
    expect(solutionTwo(INPUT_1)).toEqual(1);
    expect(solutionTwo(INPUT_2)).toEqual(36);
  });
});
