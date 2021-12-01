import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '199',
  '200',
  '208',
  '210',
  '200',
  '207',
  '240',
  '269',
  '260',
  '263',
];

describe('puzzle one', () => {
  it('Counts the number of increasing readings', () => {
    // expect(solutionOne(INPUT)).toEqual(7);
  });
});

describe('puzzle two', () => {
  it('Counts the number of increasing 3 reading sequences', () => {
    expect(solutionTwo(INPUT)).toEqual(5);
  });
});
