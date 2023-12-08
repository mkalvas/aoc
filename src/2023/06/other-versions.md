# Other versions of 2023 day 06

## Works, but takes a few seconds for the second part's real inputs

```js
const press = ([time, record]) =>
  range(0, time + 1).filter((pt) => pt * (time - pt) > record).length;
```

## Very fast, but not a direct analytical solution (quadratic equation)

```js
const press = ([time, record]) => {
  let d = 0;
  let pt = 0;
  while (d <= record) {
    pt++;
    d = pt * (time - pt);
  }
  return time + 1 - 2 * pt;
};
```
