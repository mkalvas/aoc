import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['F10', 'N3', 'F7', 'R90', 'F11'];
const INPUT_2 = ['F10', 'N3', 'F7', 'L90', 'F11'];

describe('puzzle one', () => {
  it('finds the manhattan distance', () => {
    expect(solutionOne(INPUT_1)).toEqual(25);
    expect(solutionOne(INPUT_2)).toEqual(31);
  });
});

describe('puzzle two', () => {
  it('finds the manhattan distance', () => {
    expect(solutionTwo(INPUT_1)).toEqual(286);
  });
});
