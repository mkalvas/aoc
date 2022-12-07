# Other versions of 2021 day 14

# Simple, slow

```js
const parseInput = (input) => {
  const groups = groupLines(input);
  return {
    chain: groups[0][0].split(''),
    reactions: groups[1].reduce((r, l) => {
      const [bind, insert] = l.split(' -> ');
      return { ...r, [bind]: insert };
    }, {}),
  };
};

const polymerize = ({ chain, reactions }, steps = 10) => {
  for (let i = 0; i < steps; i++) {
    const pairs = cons(chain, 2);
    for (const [p, [a, b]] of pairs.entries()) {
      chain.splice(p * 2 + 1, 0, reactions[`${a}${b}`]);
    }
  }
  return chain;
};

export const solutionOne = (input) => {
  const counts = vals(counter(polymerize(parseInput(input)))).sort(numSort);
  return counts.at(-1) - counts[0];
};
```
