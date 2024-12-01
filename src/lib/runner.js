import { execSync } from 'child_process';
import { performance } from 'perf_hooks';
import { getFileLines } from './functions';
import days2015 from '../2015';
import days2020 from '../2020';
import days2021 from '../2021';
import days2022 from '../2022';
import days2023 from '../2023';
import days2024 from '../2024';

export const YEARS = {
  2015: days2015,
  2020: days2020,
  2021: days2021,
  2022: days2022,
  2023: days2023,
  2024: days2024,
};

const TOP = `
┌──────────────────────────────────────────────────────────────────────────────┐
`.trim();
const HEAD = `
├─────┬──────┬────────────┬────────────────────────────────────────────────────┤
│ LOC │ PART │   TIMING   │                      ANSWER                        │
`.trim();
// const YEAR_START = `├${'─'.padEnd(87, '─')}┤`;
const YEAR_END = `├─────┬──────┬────────────┬${'─'.padEnd(52, '─')}┤`;
const YEAR_START = `├─────┴──────┴────────────┴${'─'.padEnd(52, '─')}┤`;
const DAY_START = `├─────┼──────┼────────────┼${'─'.padEnd(52, '─')}┤`;
const BOTTOM = `└─────┴──────┴────────────┴${'─'.padEnd(52, '─')}┘`;
const message = (y) => `│ ${y.padEnd(76, ' ')} │`;
const dayVal = (day, seq, val, time, loc) =>
  `│ ${loc ?? '   '} │ ${day.padStart(2, '0')}.${seq} │ ${time
    .toString()
    .padStart(7, ' ')} ms │ ${val.padEnd(50, ' ')} │`;

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
        const paddedNum = dayNumber.padStart(2, '0');
        if (day === 'all' || day === dayNumber || day === paddedNum) {
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
