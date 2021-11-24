import { solutionOne, solutionTwo } from './code';

const INPUT = ['17807724', '5764801'];

describe('puzzle one', () => {
  it('Cracks the encryption key', () => {
    expect(solutionOne(INPUT)).toEqual(14897079);
  });
});

describe('puzzle two', () => {
  it('Does nothing, Merry Christmas!', () => {
    expect(solutionTwo(INPUT)).toEqual(undefined);
  });
});
