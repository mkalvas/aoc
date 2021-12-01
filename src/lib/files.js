import fs from 'fs';

export const getFileLines = (path) => {
  let lines = fs.readFileSync(path, 'utf-8').split('\n');
  return lines[lines.length - 1] === ''
    ? lines.slice(0, lines.length - 1)
    : lines;
};

export const groupLines = (lines) =>
  lines.reduce(
    (groups, line) => {
      if (line === '') return [...groups, []];
      groups[groups.length - 1].push(line);
      return groups;
    },
    [[]]
  );
