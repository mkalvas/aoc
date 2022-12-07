import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k',
];

describe('puzzle one', () => {
  it('Sums directories with size <= 100000', () => {
    expect(solutionOne(INPUT)).toEqual(95437);
  });
});

describe('puzzle two', () => {
  it('Finds the size of the best folder to delete', () => {
    expect(solutionTwo(INPUT)).toEqual(24933642);
  });
});
