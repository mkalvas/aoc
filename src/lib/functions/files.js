import fs from 'fs';
import '../extensions/array';

export const groupLines = (lines) => lines.groupLines();
export const getFileLines = (path) => {
  let lines = fs.readFileSync(path, 'utf-8').split('\n');
  return lines[lines.length - 1] === ''
    ? lines.slice(0, lines.length - 1)
    : lines;
};
