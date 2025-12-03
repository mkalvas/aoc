import '../../lib/extensions';

const backwards = (batteries) => (bank) => {
  let joltage = '';
  let stop = -1;

  for (let bi = 0; bi < batteries; bi++) {
    let cursor = bank.length - batteries + bi;

    let maxi = -1;
    let maxv = bank[cursor];

    while (cursor > stop && cursor >= 0) {
      if (bank[cursor] >= maxv) {
        maxv = bank[cursor];
        maxi = cursor;
      }
      cursor--;
    }

    stop = maxi;
    joltage += maxv;
  }

  return +joltage;
};

export const solutionOne = (input) =>
  input
    .map((b) => b.split('').nums())
    .map(backwards(2))
    .sum();

export const solutionTwo = (input) =>
  input
    .map((b) => b.split('').nums())
    .map(backwards(12))
    .sum();
