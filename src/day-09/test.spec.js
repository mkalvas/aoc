import { solutionOne, solutionTwo } from './code';

const TEST_BUFFER_SIZE = 5;
const INPUT = [
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

describe('puzzle one', () => {
  it('returns the invalid sequence number', () => {
    expect(solutionOne(INPUT, TEST_BUFFER_SIZE)).toBe(127);
  });
});

describe('puzzle two', () => {
  it('sums the smallest and largest of the sequence', () => {
    expect(solutionTwo(INPUT, TEST_BUFFER_SIZE)).toBe(62);
  });
});
