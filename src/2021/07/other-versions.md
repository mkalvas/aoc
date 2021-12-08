# Other attempts at 2021 day 7

## Confused unga bunga = brute force

```js
const solutionOne = (input) => {
  const seq = input[0].split(',').map(Number).sort(numSort);
  const tracker = new Map();
  for (const target of range(seq[0], seq.at(-1))) {
    if (!tracker.has(target)) {
      let fuelUsage = 0;
      for (const base of seq) {
        fuelUsage += Math.abs(target - base);
      }
      tracker.set(target, fuelUsage);
    }
  }

  let min = undefined;
  for (const [pos, fuel] of tracker) {
    if (min === undefined || fuel < min.fuel) min = { pos, fuel };
  }
  return min.fuel;
};

const solutionTwo = (input) => {
  const seq = input[0].split(',').map(Number).sort(numSort);
  const tracker = new Map();
  for (const target of range(seq[0], seq.at(-1))) {
    if (!tracker.has(target)) {
      let fuelUsage = 0;
      for (const base of seq) {
        fuelUsage += incFuel(Math.abs(target - base));
      }
      tracker.set(target, fuelUsage);
    }
  }

  let min = undefined;
  for (const [pos, fuel] of tracker) {
    if (min === undefined || fuel < min.fuel) min = { pos, fuel };
  }
  return min.fuel;
};
```
