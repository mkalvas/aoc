import { csv } from '../../lib';

const parseLine = (line) => {
  const parts = line.split(':');
  return {
    id: +parts[0].split(' ')[1],
    draws: parts[1].split(';').flatMap(csv),
  };
};

const validate = ([counter, id]) =>
  counter.red <= 12 && counter.green <= 13 && counter.blue <= 14 ? id : 0;

const counts = (game) => {
  let counter = { red: 0, green: 0, blue: 0 };
  for (let draw of game.draws) {
    const [count, color] = draw.trim().split(' ');
    counter[color] = Math.max(counter[color], count);
  }
  return [counter, game.id];
};

export const solutionOne = (input) =>
  input.map((l) => validate(counts(parseLine(l)))).sum();

export const solutionTwo = (input) =>
  input.map((l) => Object.values(counts(parseLine(l))[0]).product()).sum();
