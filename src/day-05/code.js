import { numericSort } from '../lib';

const lineToBin = (text) => text.replace(/[BR]/g, '1').replace(/[FL]/g, '0');

const linesToIds = (lines) =>
  lines.map((line) => parseInt(lineToBin(line), 2)).sort(numericSort);

export const solutionOne = (input) => linesToIds(input).pop();

export const solutionTwo = (input) =>
  linesToIds(input).find((id, i, arr) => arr[i + 1] - id > 1) + 1;
