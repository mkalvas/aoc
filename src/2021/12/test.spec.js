import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'];

const INPUT_2 = [
  'dc-end',
  'HN-start',
  'start-kj',
  'dc-start',
  'dc-HN',
  'LN-dc',
  'HN-end',
  'kj-sa',
  'kj-HN',
  'kj-dc',
];

const INPUT_3 = [
  'fs-end',
  'he-DX',
  'fs-he',
  'start-DX',
  'pj-DX',
  'end-zg',
  'zg-sl',
  'zg-pj',
  'pj-he',
  'RW-he',
  'fs-DX',
  'pj-RW',
  'zg-RW',
  'start-pj',
  'he-WI',
  'zg-he',
  'pj-fs',
  'start-RW',
];

describe('puzzle one', () => {
  it('Counts the number of paths through the cave', () => {
    expect(solutionOne(INPUT_1)).toEqual(10);
    expect(solutionOne(INPUT_2)).toEqual(19);
    expect(solutionOne(INPUT_3)).toEqual(226);
  });
});

describe('puzzle two', () => {
  it('', () => {
    expect(solutionTwo(INPUT_1)).toEqual(36);
    expect(solutionTwo(INPUT_2)).toEqual(103);
    expect(solutionTwo(INPUT_3)).toEqual(3509);
  });
});
