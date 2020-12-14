const parseInput = (input) => ({
  departure: Number(input[0]),
  buses: input[1].split(',').reduce((acc, n, i) => {
    if (n !== 'x') return [...acc, [Number(n), i]];
    return acc;
  }, []),
});

const findBestBus = ({ departure, buses }) =>
  buses.reduce((best, [bus]) => {
    const wait = bus - (departure % bus);
    if (!best.wait || wait < best.wait) return { bus, wait };
    return best;
  }, {});

const findSequence = ({ buses }) => {
  let candidate = buses[0][0];
  let increment = buses[0][0];
  for (const [bus, position] of buses.slice(1)) {
    while ((candidate + position) % bus !== 0) {
      candidate += increment;
    }
    increment *= bus;
  }
  return candidate;
};

export const solutionOne = (input) => {
  const best = findBestBus(parseInput(input));
  return best.bus * best.wait;
};

export const solutionTwo = (input) => findSequence(parseInput(input));
