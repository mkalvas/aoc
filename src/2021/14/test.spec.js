import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'NNCB',
  '',
  'CH -> B',
  'HH -> N',
  'CB -> H',
  'NH -> C',
  'HB -> C',
  'HC -> B',
  'HN -> C',
  'NN -> C',
  'BH -> H',
  'NC -> B',
  'NB -> B',
  'BN -> B',
  'BB -> N',
  'BC -> B',
  'CC -> N',
  'CN -> C',
];

describe('puzzle one', () => {
  it('Difference between most and least common elements after 10 steps', () => {
    expect(solutionOne(INPUT)).toEqual(1588);
  });
});

describe('puzzle two', () => {
  it('Difference between most and least common elements after 40 steps', () => {
    expect(solutionTwo(INPUT)).toEqual(2188189693529);
  });
});
