# Other versions of 2021 day 06

## Slow naïve part one

```js
const run = async (input, days) => {
  let fish = input[0].split(',');
  for (let i = 0; i < days; i++) {
    let born = 0;
    for (let j = 0; j < fish.length; j++) {
      fish[j]--;
      if (fish[j] < 0) {
        fish[j] = 6;
        born++;
      }
    }
    Array.from({ length: born }).forEach((_) => fish.push(8));
  }
  return fish.length;
};
```
