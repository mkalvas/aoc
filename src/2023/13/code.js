import { chars, groupLines } from '../../lib';

const findReflection = (group, allowed) => {
  for (let row = 1; row < group.length; row++) {
    let smudges = 0;
    for (let d = 0; d >= 0; d++) {
      const above = group[row - d - 1];
      const below = group[row + d];
      if (!above || !below) {
        if (smudges !== allowed) break;
        return row;
      } else if (!above.eq(below)) {
        smudges += above.diffCount(below);
        if (smudges > allowed) break;
      }
    }
  }
};

const solve = (input, allowed) =>
  groupLines(input).reduce((score, group) => {
    const mirror = group.map(chars);
    const rowsAbove = findReflection(mirror, allowed);
    if (rowsAbove) return score + 100 * rowsAbove;
    return score + findReflection(mirror.transpose(), allowed);
  }, 0);

export const solutionOne = (input) => solve(input, 0);
export const solutionTwo = (input) => solve(input, 1);
