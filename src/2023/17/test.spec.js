import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  '2413432311323',
  '3215453535623',
  '3255245654254',
  '3446585845452',
  '4546657867536',
  '1438598798454',
  '4457876987766',
  '3637877979653',
  '4654967986887',
  '4564679986453',
  '1224686865563',
  '2546548887735',
  '4322674655533',
];

const INPUT_2 = [
  '111111111111',
  '999999999991',
  '999999999991',
  '999999999991',
  '999999999991',
];

const INPUT_3 = ['11'];
const INPUT_4 = ['11', '11'];
const INPUT_5 = ['112', '212', '291'];
const INPUT_6 = ['11111', '99921', '99991', '99991'];
const INPUT_7 = ['11199', '92199', '99199', '99131', '99111'];

describe('puzzle one', () => {
  it('it finds the min heat loss with max 3 in a row', () => {
    expect(solutionOne(INPUT_1)).toEqual(102);
    expect(solutionOne(INPUT_2)).toEqual(59);
    expect(solutionOne(INPUT_7)).toEqual(9);
    expect(solutionOne(INPUT_4)).toEqual(2);
    expect(solutionOne(INPUT_3)).toEqual(1);
    expect(solutionOne(INPUT_5)).toEqual(5);
    expect(solutionOne(INPUT_6)).toEqual(8);
  });
});

describe('puzzle two', () => {
  it('it finds the min heat loss with min 4 and max 10 in a row', () => {
    expect(solutionTwo(INPUT_1)).toEqual(94);
    expect(solutionTwo(INPUT_2)).toEqual(71);
  });
});
