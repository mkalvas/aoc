# Other versions of 2024 day 11

## Actually applying the rules and splitting the rocks

```js
let cache = new Map();
const rules = (rock) => {
  let r = `${+rock}`;
  let ret = String(+r * 2024);
  if (cache.has(r)) return cache.get(r);
  if (r === '0') {
    ret = '1';
  } else if (r.length % 2 === 0) {
    ret = [r.slice(0, r.length / 2), r.slice(r.length / 2)];
  }
  cache.set(r, ret);
  return ret;
};

const solve = (input, blinks) => {
  let rocks = input[0].split(' ');
  for (let blink = 0; blink < blinks; blink++) {
    rocks = rocks.flatMap(rules);
  }
  console.log(rocks);
  return rocks.length;
};
```
