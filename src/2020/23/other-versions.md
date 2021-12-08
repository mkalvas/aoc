# Other versions of 2020 day 23

```js
const move = (cups) => {
  const picks = cups.slice(1, 4);
  const others = [cups[0], ...cups.slice(4)];

  let insNum = cups[0] - 1;
  let pos = others.indexOf(insNum);
  while (pos === -1) {
    if (insNum <= 0) insNum += cups.length;
    pos = others.indexOf(insNum);
    insNum--;
  }

  cups = [...others.slice(0, pos + 1), ...picks, ...others.slice(pos + 1)];
  cups.push(cups.shift());
  return cups;
};

const solution = (input, loops, cupCount) => {
  let cups = Array.from({ length: cupCount - 9 }, (v, i) => i + 10);
  cups.unshift(...nums(input[0].split('')));
  for (let i = 0; i < loops; i++) {
    cups = move(cups);
  }
  const one = cups.indexOf(1);
  return { tail: cups.slice(0, one), head: cups.slice(one + 1) };
};
```
