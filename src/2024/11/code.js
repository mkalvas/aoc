const cached = (rock, gen, max, cache) => {
  const key = `${rock}-${gen}`;
  if (cache.has(key)) return cache.get(key);
  const ret = evolve(rock, gen, max, cache);
  cache.set(key, ret);
  return ret;
};

const evolve = (rock, gen, max, cache) => {
  if (gen === max) return 1;
  let r = `${+rock}`;
  let next = gen + 1;
  if (r === '0') return cached('1', next, max, cache);
  if (r.length % 2 === 0) {
    return (
      cached(r.slice(0, r.length / 2), next, max, cache) +
      cached(r.slice(r.length / 2), next, max, cache)
    );
  }
  return cached(`${+r * 2024}`, next, max, cache);
};

const solve = (input, blinks) => {
  let cache = new Map();
  return input[0]
    .split(' ')
    .reduce((sum, rock) => sum + cached(rock, 0, blinks, cache), 0);
};

export const solutionOne = (input) => solve(input, 25);
export const solutionTwo = (input) => solve(input, 75);
