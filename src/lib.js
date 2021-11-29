import fs from 'fs';
import { performance } from 'perf_hooks';
import days2020 from './2020';

const DAYS = [...days2020];

// Set functions
export const copy = (a) => new Set([...a]);
export const union = (a, b) => new Set([...a, ...b]);
export const intersect = (a, b) => new Set([...a].filter((x) => b.has(x)));
export const difference = (a, b) => new Set([...a].filter((x) => !b.has(x)));

// Array functions
export const sum = (arr) => arr.reduce((s, n) => s + n, 0);
export const parseInts = (input) => input.map(Number);
export const numericSort = (a, b) => a - b;
export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

// String functions
export const reverse = (s) => s.split('').reverse().join('');

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

export const solve = (day, dayNumber) => `Day ${dayNumber}
  Puzzle 01 - ${day.label}: ${day.solutionOne(getFileLines(day.path))}
  Puzzle 02 - ${day.label}: ${day.solutionTwo(getFileLines(day.path))}
`;

export const aoc = () => DAYS.map((day, i) => solve(day, i + 1)).join('\n');

const perf = (callback) => {
  const t0 = performance.now();
  callback();
  return (performance.now() - t0).toFixed(2).toString().padStart(8, 0) + ' ms';
};

const d2s = (d) => d.toString().padStart(2, 0);

const timeDay = (day, dayNumber) => `├──────┼─────────────┤
│ ${d2s(dayNumber)}.1 │ ${perf(() => day.solutionOne(getFileLines(day.path)))} │
│ ${d2s(dayNumber)}.2 │ ${perf(() =>
  day.solutionTwo(getFileLines(day.path))
)} │`;

export const time = () => `┌──────┬─────────────┐
│ days │   timings   │
${DAYS.map((day, i) => timeDay(day, i + 1)).join('\n')}
└──────┴─────────────┘`;
