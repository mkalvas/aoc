import { execSync } from 'child_process';
import { performance } from 'perf_hooks';
import { getFileLines } from './files';
import days2020 from '../2020';
import days2021 from '../2021';

export const YEARS = {
  2020: days2020,
  2021: days2021,
};

const TOP = `
┌───────────────────────────────────────────────────────────────────────────────────────┐
`.trim();
const HEAD = `
├─────┬──────┬─────────────┬────────────────────────────────────────────────────────────┤
│ LOC │ PART │   TIMING    │                           ANSWER                           │
`.trim();
// const YEAR_START = `├${'─'.padEnd(87, '─')}┤`;
const YEAR_END = `├─────┬──────┬─────────────┬${'─'.padEnd(60, '─')}┤`;
const YEAR_START = `├─────┴──────┴─────────────┴${'─'.padEnd(60, '─')}┤`;
const DAY_START = `├─────┼──────┼─────────────┼${'─'.padEnd(60, '─')}┤`;
const BOTTOM = `└─────┴──────┴─────────────┴${'─'.padEnd(60, '─')}┘`;
const message = (y) => `│ ${y.padEnd(85, ' ')} │`;
const dayVal = (day, seq, val, time, loc) =>
  `│ ${loc ?? '   '} │ ${day.padStart(2, '0')}.${seq} │ ${time
    .toString()
    .padStart(8, ' ')} ms │ ${val.padEnd(58, ' ')} │`;

const cloc = (year, day) => {
  const cmd = `grep -Rcv '^s*$' ./src/${year}/${day.padStart(2, 0)}/code.js`;
  return execSync(cmd).toString().split(':')[1].trim().padStart(3, ' ');
};

const perf = (callback) => {
  const t0 = performance.now();
  const answer = callback();
  return [(performance.now() - t0).toFixed(2), answer];
};

const solve = (day, dayNumber, yearNumber) => {
  const lines = getFileLines(day.path);
  const [t1, a1] = perf(() => day.solutionOne(lines));
  const [t2, a2] = perf(() => day.solutionTwo(lines));
  const loc = cloc(yearNumber, dayNumber);

  const valueOne = `${a1}`;
  const valueTwo = `${a2}`;
  return [
    dayVal(dayNumber, 1, valueOne, t1, loc),
    dayVal(dayNumber, 2, valueTwo, t2),
  ];
};

export const aoc = (year = 'all', day = 'all', msg) => {
  let output = [TOP, message(msg), HEAD];
  for (const [yearNumber, days] of Object.entries(YEARS)) {
    if (year === 'all' || year === yearNumber) {
      output.push(YEAR_START);
      output.push(message(yearNumber));
      output.push(YEAR_END);
      for (const [dayNumber, dayCode] of Object.entries(days)) {
        if (day === 'all' || day === dayNumber) {
          output.push(...solve(dayCode, dayNumber, yearNumber));
          output.push(DAY_START);
        }
      }
      output.pop();
    }
  }
  output.push(BOTTOM);
  return output.join('\n');
};
