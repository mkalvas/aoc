import { solutionOne, solutionTwo } from './code';

const TEST_BUFFER_SIZE = 5;
const INPUT_1 = [
  '35',
  '20',
  '15',
  '25',
  '47',
  '40',
  '62',
  '55',
  '65',
  '95',
  '102',
  '117',
  '150',
  '182',
  '127',
  '219',
  '299',
  '277',
  '309',
  '576',
];

const INPUT_2 = [
  998, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 1000,
];

describe('puzzle one', () => {
  it('returns the invalid sequence number', () => {
    expect(solutionOne(INPUT_1, TEST_BUFFER_SIZE)).toBe(127);
    expect(solutionOne(INPUT_2)).toBe(1000);
  });
});

describe('puzzle two', () => {
  it('sums the smallest and largest of the sequence', () => {
    expect(solutionTwo(INPUT_1, TEST_BUFFER_SIZE)).toBe(62);
    expect(solutionTwo(INPUT_2)).toBe(999);
  });
});
