import { solutionOne, solutionTwo } from './code';

const INPUT = ['389125467'];

describe('puzzle one', () => {
  it('Produces the labels on the cups', () => {
    expect(solutionOne(INPUT)).toEqual('67384529');
  });
});

describe('puzzle two', () => {
  xit('', () => {
    expect(solutionTwo(INPUT)).toEqual(undefined);
  });
});
