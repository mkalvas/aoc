import {
  GAME_CONFIG_ONE,
  GAME_CONFIG_TWO,
  printMap,
  runGame,
  solutionOne,
  solutionTwo,
} from './code';

const INPUT = [
  'L.LL.LL.LL',
  'LLLLLLL.LL',
  'L.L.L..L..',
  'LLLL.LL.LL',
  'L.LL.LL.LL',
  'L.LLLLL.LL',
  '..L.L.....',
  'LLLLLLLLLL',
  'L.LLLLLL.L',
  'L.LLLLL.LL',
];

const ENDING_SNAPSHOT_1 = `#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##`;

const ENDING_SNAPSHOT_2 = `#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.LL.L#
#.LLLL#.LL
..#.L.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#`;

describe('puzzle one', () => {
  it('counts the occupied seats at steady state', () => {
    expect(solutionOne(INPUT)).toEqual(37);
    expect(printMap(runGame(INPUT, GAME_CONFIG_ONE))).toBe(ENDING_SNAPSHOT_1);
  });
});

describe('puzzle two', () => {
  it('counts the occupied seats at steady state', () => {
    expect(solutionTwo(INPUT)).toEqual(26);
    expect(printMap(runGame(INPUT, GAME_CONFIG_TWO))).toBe(ENDING_SNAPSHOT_2);
  });
});
