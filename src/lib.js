import fs from 'fs';
import { performance } from 'perf_hooks';
import days2020 from './2020';

const DAYS = [...days2020];

export const sum = (arr) => arr.reduce((s, n) => s + n, 0);
export const parseInts = (input) => input.map((n) => parseInt(n));
export const numericSort = (a, b) => a - b;
export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

export const getFileLines = (path) =>
  fs.readFileSync(path, 'utf-8').split('\n');

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
  return (performance.now() - t0).toFixed(2).toString().padStart(6, 0) + ' ms';
};

const d2s = (d) => d.toString().padStart(2, 0);

const timeDay = (day, dayNumber) => `├──────┼───────────┤
│ ${d2s(dayNumber)}.1 │ ${perf(() => day.solutionOne(getFileLines(day.path)))} │
│ ${d2s(dayNumber)}.2 │ ${perf(() =>
  day.solutionTwo(getFileLines(day.path))
)} │`;

export const time = () => `┌──────┬───────────┐
│ days │  timings  │
${DAYS.map((day, i) => timeDay(day, i + 1)).join('\n')}
└──────┴───────────┘`;
