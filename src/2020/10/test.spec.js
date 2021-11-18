import { solutionOne, solutionTwo } from './code';

const INPUT_1 = ['16', '10', '15', '5', '1', '11', '7', '19', '6', '12', '4'];
const INPUT_2 = [
  '28',
  '33',
  '18',
  '42',
  '31',
  '14',
  '46',
  '20',
  '48',
  '47',
  '24',
  '23',
  '49',
  '45',
  '19',
  '38',
  '39',
  '11',
  '1',
  '32',
  '25',
  '35',
  '8',
  '17',
  '7',
  '9',
  '4',
  '2',
  '34',
  '10',
  '3',
];

describe('puzzle one', () => {
  it('returns the multiple of the count of 1 and 3 jolt adapters', () => {
    expect(solutionOne(INPUT_1)).toBe(35);
    expect(solutionOne(INPUT_2)).toBe(220);
  });
});

describe('puzzle two', () => {
  it('sums the smallest and largest of the sequence', () => {
    expect(solutionTwo(INPUT_1)).toBe(8);
    expect(solutionTwo(INPUT_2)).toBe(19208);
  });
});
