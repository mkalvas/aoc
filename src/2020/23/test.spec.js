import { solutionOne, solutionTwo } from './code';

const INPUT = ['389125467'];

const OUTPUT = ['934001', '159792', '149245887792'];

describe('puzzle one', () => {
  it('Produces the labels on the cups', () => {
    expect(solutionOne(INPUT, 10)).toEqual('92658374');
    expect(solutionOne(INPUT)).toEqual('67384529');
  });
});

describe('puzzle two', () => {
  it('Finds the multiple of the two cup labels to the right of 1', () => {
    expect(solutionTwo(INPUT)).toEqual(OUTPUT[2]);
  });
});
