import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '89010123',
  '78121874',
  '87430965',
  '96549874',
  '45678903',
  '32019012',
  '01329801',
  '10456732',
];
const TWO = [
  '...0...',
  '...1...',
  '...2...',
  '6543456',
  '7.....7',
  '8.....8',
  '9.....9',
];

const FOUR = [
  '..90..9',
  '...1.98',
  '...2..7',
  '6543456',
  '765.987',
  '876....',
  '987....',
];

const ONE_TWO = [
  '10..9..',
  '2...8..',
  '3...7..',
  '4567654',
  '...8..3',
  '...9..2',
  '.....01',
];

const PATH_227 = ['012345', '123456', '234567', '345678', '4.6789', '56789.'];

const THREE_PATH = [
  '.....0.',
  '..4321.',
  '..5..2.',
  '..6543.',
  '..7..4.',
  '..8765.',
  '..9....',
];

describe('puzzle one', () => {
  it('counts the summits the trailheads can reach', () => {
    expect(solutionOne(TWO)).toEqual(2);
    expect(solutionOne(FOUR)).toEqual(4);
    expect(solutionOne(ONE_TWO)).toEqual(3);
    expect(solutionOne(THREE_PATH)).toEqual(1);
    expect(solutionOne(INPUT)).toEqual(36);
  });
});

describe('puzzle two', () => {
  it('counts the paths to the summits that the trailheads can reach', () => {
    expect(solutionTwo(TWO)).toEqual(2);
    expect(solutionTwo(FOUR)).toEqual(13);
    expect(solutionTwo(ONE_TWO)).toEqual(3);
    expect(solutionTwo(THREE_PATH)).toEqual(3);
    expect(solutionTwo(PATH_227)).toEqual(227);
    expect(solutionTwo(INPUT)).toEqual(81);
  });
});
