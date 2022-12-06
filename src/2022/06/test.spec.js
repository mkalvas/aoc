import { solutionOne, solutionTwo } from './code';

const INPUTS_1 = [
  [['bvwbjplbgvbhsrlpgdmjqwftvncz'], 5],
  [['nppdvjthqldpwncqszvftbrmjlhg'], 6],
  [['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'], 10],
  [['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'], 11],
];

const INPUTS_2 = [
  [['mjqjpqmgbljsphdztnvjfqwrcgsmlb'], 19],
  [['bvwbjplbgvbhsrlpgdmjqwftvncz'], 23],
  [['nppdvjthqldpwncqszvftbrmjlhg'], 23],
  [['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'], 29],
  [['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'], 26],
];

describe('puzzle one', () => {
  it('Finds the index after the start-of-packet marker', () => {
    INPUTS_1.forEach((i) => expect(solutionOne(i[0])).toEqual(i[1]));
  });
});

describe('puzzle two', () => {
  it('Finds the index after the start-of-message marker', () => {
    INPUTS_2.forEach((i) => expect(solutionTwo(i[0])).toEqual(i[1]));
  });
});
