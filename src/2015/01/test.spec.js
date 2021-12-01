import { solutionOne, solutionTwo } from './code';

const INPUTS_ONE = [
  '(())',
  '()()',
  '(((',
  '(()(()(',
  '))(((((',
  '())',
  '))(',
  ')))',
  ')())())',
];

const INPUTS_TWO = [')', '()())'];

describe('puzzle one', () => {
  it('', () => {
    expect(solutionOne(INPUTS_ONE.slice(0, 1))).toEqual(0);
    expect(solutionOne(INPUTS_ONE.slice(1, 2))).toEqual(0);
    expect(solutionOne(INPUTS_ONE.slice(2, 3))).toEqual(3);
    expect(solutionOne(INPUTS_ONE.slice(3, 4))).toEqual(3);
    expect(solutionOne(INPUTS_ONE.slice(4, 5))).toEqual(3);
    expect(solutionOne(INPUTS_ONE.slice(5, 6))).toEqual(-1);
    expect(solutionOne(INPUTS_ONE.slice(6, 7))).toEqual(-1);
    expect(solutionOne(INPUTS_ONE.slice(7, 8))).toEqual(-3);
    expect(solutionOne(INPUTS_ONE.slice(8, 9))).toEqual(-3);
  });
});

describe('puzzle two', () => {
  it('', () => {
    expect(solutionTwo(INPUTS_TWO.slice(0, 1))).toEqual(1);
    expect(solutionTwo(INPUTS_TWO.slice(1, 2))).toEqual(5);
  });
});
