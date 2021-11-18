import { solutionOne, solutionTwo } from './code';

const INPUT = ['5764801', '17807724'];

describe('puzzle one', () => {
  it('cracks the encryption key', () => {
    expect(solutionOne(INPUT)).toEqual(14897079);
  });
});

describe('puzzle two', () => {
  xit('', () => {
    expect(solutionTwo(INPUT)).toEqual(undefined);
  });
});
