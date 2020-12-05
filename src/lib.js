import fs from 'fs';

export const getFileLines = (path) =>
  fs.readFileSync(path, 'utf-8').split('\n');

export const solve = (parseFn, solveFns, printFn) => {
  const input = parseFn();
  solveFns.map((fn, i) => {
    console.log(`  Puzzle ${i + 1}`);
    printFn(fn(input));
  });
};
