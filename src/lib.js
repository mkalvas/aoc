import fs from 'fs';
import { performance } from 'perf_hooks';

import day01 from './day-01';
import day02 from './day-02';
import day03 from './day-03';
import day04 from './day-04';
import day05 from './day-05';
import day06 from './day-06';
import day07 from './day-07';
import day08 from './day-08';
import day09 from './day-09';
import day10 from './day-10';
import day11 from './day-11';
import day12 from './day-12';
import day13 from './day-13';
import day14 from './day-14';
import day15 from './day-15';

export const DAYS = [
  day01,
  day02,
  day03,
  day04,
  day05,
  day06,
  day07,
  day08,
  day09,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
];

export const parseInts = (input) => input.map((n) => parseInt(n));
export const numericSort = (a, b) => a - b;

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
