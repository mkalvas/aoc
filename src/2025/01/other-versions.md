# Other versions of 2025 day 01

## Separate, extracted core logic

```js
const solve = (input, fn) => {
  let dial = 50;
  let count = 0;
  for (const line of input) {
    const dir = line[0] === 'R' ? 1 : -1;
    const dist = +line.slice(1);
    [dial, count] = fn(dial, count, dir, dist);
  }
  return count;
};

export const solutionOne = (input) =>
  solve(input, (dial, count, dir, dist) => {
    dial += +dist * dir;
    dial = (dial + 100) % 100;
    if (dial === 0) count++;
    return [dial, count];
  });

export const solutionTwo = (input) =>
  solve(input, (dial, count, dir, dist) => {
    for (let i = 1; i <= dist; i++) {
      dial += dir;
      if (dial <= 0 || dial > 99) {
        dial = (dial + 100) % 100;
        if (dial === 0) count++;
      }
    }
    return [dial, count];
  });
```
