import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '.|...\\....',
  '|.-.\\.....',
  '.....|-...',
  '........|.',
  '..........',
  '.........\\',
  '..../.\\\\..',
  '.-.-/..|..',
  '.|....-|.\\',
  '..//.|....',
];

const cases = [
  [['.|', '..'], 3],
  [['.-', '..'], 2],
  [['.\\', '..'], 3],
  [['./', '..'], 2],
  [['..', '..'], 2],

  [['\\.', '|.'], 2],
  [['\\.', '-.'], 3],
  [['\\.', '\\.'], 3],
  [['\\.', '/.'], 2],
  [['\\.', '..'], 2],

  [['/.', '|.'], 1],
  [['/.', '-.'], 1],
  [['/.', '\\.'], 1],
  [['/.', '/.'], 1],
  [['/.', '..'], 1],

  [['|.', '|.'], 2],
  [['|.', '-.'], 3],
  [['|.', '\\.'], 3],
  [['|.', '/.'], 2],
  [['|.', '..'], 2],

  [['-.\\', '\\./'], 6],
  [['.\\', './'], 4],
  [['-\\', '\\/'], 4],
  [['|.-', '...', '-.|'], 8],
];

describe('puzzle one', () => {
  it('counts the illuminated squares', () => {
    expect(solutionOne(INPUT)).toEqual(46);
  });

  it.each(cases)('%s', (input, expected) => {
    expect(solutionOne(input)).toEqual(expected);
  });
});

describe('puzzle two', () => {
  it('counts the illuminated squares from the optimal beam', () => {
    expect(solutionTwo(INPUT)).toEqual(51);
  });
});
