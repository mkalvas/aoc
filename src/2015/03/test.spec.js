import { solutionOne, solutionTwo } from './code';

const INPUTS_ONE = ['>', '^>v<', '^v^v^v^v^v'];
const INPUTS_TWO = ['^v', '^>v<', '^v^v^v^v^v'];

describe('puzzle one', () => {
  it('Counts houses that Santa visits at least once', () => {
    expect(solutionOne([INPUTS_ONE[0]])).toEqual(2);
    expect(solutionOne([INPUTS_ONE[1]])).toEqual(4);
    expect(solutionOne([INPUTS_ONE[2]])).toEqual(2);
  });
});

describe('puzzle two', () => {
  it('Counts houses that Santa or Robo-Santa visit at least once', () => {
    expect(solutionTwo([INPUTS_TWO[0]])).toEqual(3);
    expect(solutionTwo([INPUTS_TWO[1]])).toEqual(3);
    expect(solutionTwo([INPUTS_TWO[2]])).toEqual(11);
  });
});
