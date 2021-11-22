import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'Player 1:',
  '9',
  '2',
  '6',
  '3',
  '1',
  '',
  'Player 2:',
  '5',
  '8',
  '4',
  '7',
  '10',
];

const INPUT_RECURSIVE = [
  'Player 1:',
  '43',
  '19',
  '',
  'Player 2:',
  '2',
  '29',
  '14',
];

describe('puzzle one', () => {
  it('Calculates the combat score', () => {
    expect(solutionOne(INPUT)).toEqual(306);
  });
});

describe('puzzle two', () => {
  it('Calculates the recursive combat score', () => {
    expect(solutionTwo(INPUT)).toEqual(291);
    expect(solutionTwo(INPUT_RECURSIVE)).toEqual(105);
  });
});
