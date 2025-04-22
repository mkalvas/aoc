import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  '########',
  '#..O.O.#',
  '##@.O..#',
  '#...O..#',
  '#.#.O..#',
  '#...O..#',
  '#......#',
  '########',
  '',
  '<^^>>>vv<v>>v<<',
];

const INPUT_2 = [
  '##########',
  '#..O..O.O#',
  '#......O.#',
  '#.OO..O.O#',
  '#..O@..O.#',
  '#O#..O...#',
  '#O..O..O.#',
  '#.OO.O.OO#',
  '#....O...#',
  '##########',
  '',
  '<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^',
  'vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v',
  '><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<',
  '<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^',
  '^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><',
  '^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^',
  '>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^',
  '<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>',
  '^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>',
  'v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^',
];

const DOUBLE_PUSH = [
  '#######',
  '#...#.#',
  '#.....#',
  '#..OO@#',
  '#..O..#',
  '#.....#',
  '#######',
  '',
  '<vv<<^^<<^^',
];

const HALF_PUSH = [
  '#####',
  '#...#',
  '#.O.#',
  '#.O.#',
  '#.@.#',
  '#####',
  '',
  '^',
];

describe('puzzle one', () => {
  it('sums the gps coordinates of the boxes', () => {
    expect(solutionOne(INPUT_1)).toEqual(2028);
    expect(solutionOne(INPUT_2)).toEqual(10092);
  });
});

describe('puzzle two', () => {
  it('sums the gps coordinates of the double wide boxes', () => {
    expect(solutionTwo(DOUBLE_PUSH)).toEqual(618);
    expect(solutionTwo(HALF_PUSH)).toEqual(308);
    expect(solutionTwo(INPUT_2)).toEqual(9021);
  });
});
