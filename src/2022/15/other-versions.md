# Other versions for `2022-12-15`

Works fine, but is slow at ~10s.

```js
const points = input.map(parse);
for (const { sx, sy, d } of points) {
  for (const ySign of [-1, 1]) {
    for (const xSign of [-1, 1]) {
      for (let dx = 0; dx <= d + 1; dx++) {
        let x = sx + dx * xSign;
        let y = sy + (d + 1 - dx) * ySign;
        if (x < 0 || MAX < x || y < 0 || MAX < y) continue;
        if (!points.some((p) => inRange(p, x, y))) return x * 4000000 + y;
      }
    }
  }
}
```
