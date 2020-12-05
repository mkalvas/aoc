import { getFileLines, solve } from '../lib';
import { puzzleOne, puzzleTwo } from './code';

export const createPasswordRecord = (line) => {
  const parts = line.split(' ');
  const minMax = parts[0].split('-');

  return {
    password: parts[2],
    policy: {
      min: parseInt(minMax[0]),
      max: parseInt(minMax[1]),
      pattern: parts[1].slice(0, -1),
    },
  };
};

const parseInput = () =>
  getFileLines(`${__dirname}/input.txt`).map(createPasswordRecord);

const printOutput = (solution) => {
  console.log(`  Valid Passwords: ${solution}`);
  console.log('');
};

const day = () => solve(parseInput, [puzzleOne, puzzleTwo], printOutput);

export default day;
