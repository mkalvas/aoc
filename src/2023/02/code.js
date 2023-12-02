import '../../lib/extensions';

const parseLine = (line) => {
  const parts = line.split(':');
  return {
    id: +parts[0].split(' ')[1],
    sets: parts[1].split(';').map((s) => s.split(',').map((s) => s.trim())),
  };
};

const validate = ([counter, id]) =>
  counter.red <= 12 && counter.green <= 13 && counter.blue <= 14 ? id : 0;

const counts = (game) => {
  let counter = { red: 0, green: 0, blue: 0 };
  for (let set of game.sets) {
    for (let draw of set) {
      const [count, color] = draw.split(' ');
      counter[color] = Math.max(counter[color], count);
    }
  }
  return [counter, game.id];
};

export const solutionOne = (input) =>
  input.map(parseLine).map(counts).map(validate).sum();

export const solutionTwo = (input) =>
  input
    .map(parseLine)
    .map(counts)
    .map(([c]) => Object.values(c).product())
    .sum();
