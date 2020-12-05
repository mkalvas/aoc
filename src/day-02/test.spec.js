import { puzzleOne, puzzleTwo } from './code';
import { createPasswordRecord } from './index';

const RAW_INPUT = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

const INPUT = RAW_INPUT.map(createPasswordRecord);

describe('input line parser', () => {
  it('parses raw input lines into records', () => {
    expect(INPUT).toEqual([
      {
        password: 'abcde',
        policy: {
          min: 1,
          max: 3,
          pattern: 'a',
        },
      },
      {
        password: 'cdefg',
        policy: {
          min: 1,
          max: 3,
          pattern: 'b',
        },
      },
      {
        password: 'ccccccccc',
        policy: {
          min: 2,
          max: 9,
          pattern: 'c',
        },
      },
    ]);
  });
});

it('solves the first puzzle test case', () => {
  expect(puzzleOne(INPUT)).toBe(2);
});

it('solves the second puzzle test case', () => {
  expect(puzzleTwo(INPUT)).toBe(1);
});
