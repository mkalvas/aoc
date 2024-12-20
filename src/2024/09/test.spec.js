import { solutionOne, solutionTwo } from './code';

const INPUT = ['23331331214141314021'];

describe('puzzle one', () => {
  it('compacts the disk block-wise and calculates the checksum', () => {
    expect(solutionOne(INPUT)).toEqual(1928);
  });
});

describe('puzzle two', () => {
  it('compacts the disk file-wise and calculates the checksum', () => {
    expect(solutionTwo(INPUT)).toEqual(2858);
  });
});
