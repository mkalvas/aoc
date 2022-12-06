import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '    [D]    ',
  '[N] [C]    ',
  '[Z] [M] [P]',
  ' 1   2   3 ',
  '',
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
];

describe('puzzle one', () => {
  it('Finds the crate on top of each stack', () => {
    expect(solutionOne(INPUT)).toEqual('CMZ');
  });
});

describe('puzzle two', () => {
  it('Finds the crate on top of each stack', () => {
    expect(solutionTwo(INPUT)).toEqual('MCD');
  });
});
