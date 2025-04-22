# Other versions of 2024 day 13

## Brute force, using the 100 presses per button limit in pt 1

Easy, but not an analytical solution. There's something satisfying about the idea of an infinite cost for games that can't be won though.

```js
const cost = (game) => {
  const [[ax, ay], [bx, by], [px, py]] = game.map((l) => l.match(MOVES).nums());
  let minCost = Infinity;
  for (let ap = 0; ap < 100; ap++) {
    for (let bp = 0; bp < 100; bp++) {
      if (ap * ax + bp * bx === px && ap * ay + bp * by === py) {
        minCost = Math.min(minCost, ap * 3 + bp * 1);
      }
    }
  }
  return minCost === Infinity ? 0 : minCost;
};

```
