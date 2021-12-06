import { sum } from '../../lib';

const run = (input, days) => {
  let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  input[0].split(',').forEach((f) => fish[f]++);
  for (let i = 0; i < days; i++) {
    const resets = fish.shift();
    fish[6] += resets;
    fish.push(resets);
  }
  return sum(fish);
};

export const solutionOne = (input) => run(input, 80);
export const solutionTwo = (input) => run(input, 256);
