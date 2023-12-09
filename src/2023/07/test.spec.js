import { solutionOne, solutionTwo } from './code';

const INPUT = ['32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'];
const INPUT_2 = [
  '2345A 1',
  'Q2KJJ 13',
  'Q2Q2Q 19',
  'T3T3J 17',
  'T3Q33 11',
  '2345J 3',
  'J345A 2',
  '32T3K 5',
  'T55J5 29',
  'KK677 7',
  'KTJJT 34',
  'QQQJA 31',
  'JJJJJ 37',
  'JAAAA 43',
  'AAAAJ 59',
  'AAAAA 61',
  '2AAAA 23',
  '2JJJJ 53',
  'JJJJ2 41',
];

describe('puzzle one', () => {
  it('scores the hands of camel poker', () => {
    expect(solutionOne(INPUT)).toEqual(6440);
    expect(solutionOne(INPUT_2)).toEqual(6592);
  });
});

describe('puzzle two', () => {
  it('scores the hands of camel poker including jokers', () => {
    expect(solutionTwo(INPUT)).toEqual(5905);
    expect(solutionTwo(INPUT_2)).toEqual(6839);
  });
});
