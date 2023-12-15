import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['HASH'];
const INPUT_2 = ['rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7'];

describe('puzzle one', () => {
  it('sums the results of hashing the comma separated steps', () => {
    expect(solutionOne(INPUT_1)).toEqual(52);
    expect(solutionOne(INPUT_2)).toEqual(1320);
  });
});

describe('puzzle two', () => {
  it('sums the focusing power of the lenses', () => {
    expect(solutionTwo(INPUT_2)).toEqual(145);
  });
});
