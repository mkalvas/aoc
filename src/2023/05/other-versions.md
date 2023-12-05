# Other versions of 2023 day 05

## Too slow for part 2

Given seeds is an array of individual seed numbers. Works great for part 1 and the sample input on both parts, but the real input ranges were too big for part 2.

```js
const solve = (groups, seeds) => {
  let current = 'seed';
  const maps = parseMaps(groups);
  while (current !== 'location') {
    let map = maps[current];
    for (let i = 0; i < seeds.length; i++) {
      const v = seeds[i];
      for (const { t, f, l } of map.ranges)
        if (v >= f && v < f + l) {
          seeds[i] = v + (t - f);
          break;
        }
    }

    current = map.to;
  }
  return seeds.nums().min();
};
```
