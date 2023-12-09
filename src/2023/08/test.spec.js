import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  'RL',
  '',
  'AAA = (BBB, CCC)',
  'BBB = (DDD, EEE)',
  'CCC = (ZZZ, GGG)',
  'DDD = (DDD, DDD)',
  'EEE = (EEE, EEE)',
  'GGG = (GGG, GGG)',
  'ZZZ = (ZZZ, ZZZ)',
];

const INPUT_2 = [
  'LLR',
  '',
  'AAA = (BBB, BBB)',
  'BBB = (AAA, ZZZ)',
  'ZZZ = (ZZZ, ZZZ)',
];

const INPUT_3 = [
  'LR',
  '',
  '11A = (11B, XXX)',
  '11B = (XXX, 11Z)',
  '11Z = (11B, XXX)',
  '22A = (22B, XXX)',
  '22B = (22C, 22C)',
  '22C = (22Z, 22Z)',
  '22Z = (22B, 22B)',
  'XXX = (XXX, XXX)',
];

describe('puzzle one', () => {
  it('Counts the steps required to reach "ZZZ"', () => {
    expect(solutionOne(INPUT_1)).toEqual(2);
    expect(solutionOne(INPUT_2)).toEqual(6);
  });
});

describe('puzzle two', () => {
  it('Counts the steps required to reach nodes ending in Z simultaneously', () => {
    expect(solutionTwo(INPUT_3)).toEqual(6);
  });
});
