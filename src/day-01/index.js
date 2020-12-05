import { getFileLines, solve } from '../lib';
import { puzzleOne, puzzleTwo } from './code';

const parseInput = () =>
  getFileLines(`${__dirname}/input.txt`).map((s) => parseInt(s));

const printOutput = (solution) => {
  console.log('  {');
  console.log(`     set: ${solution.set.join(', ')}`);
  console.log(`     multiple: ${solution.multiple}`);
  console.log('  }');
  console.log('');
};

const day = () => solve(parseInput, [puzzleOne, puzzleTwo], printOutput);

export default day;
