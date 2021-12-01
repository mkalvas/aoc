import { getFileLines } from './lib';
import days2020 from './2020';
import days2021 from './2021';

const solutions = {
  2020: days2020,
  2021: days2021,
};

const solve = (day) => {
  const lines = getFileLines(day.path);
  return [day.solutionOne(lines), day.solutionTwo(lines)];
};

describe('e2e pinnning test for puzzle solutions', () => {
  Object.entries(solutions).forEach(([year, days]) => {
    describe(`${year}`, () => {
      Object.values(days).forEach((day, i) => {
        it(`solves day ${i + 1}`, () => {
          expect(solve(day)).toEqual(day.answers);
        });
      });
    });
  });
});
