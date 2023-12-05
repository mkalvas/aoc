# Other versions of 2022 day 14

## Naïve DFS

Works, but too slow for whole thing.

```js
const setOrder = (root, packets) => {
  if (packets.length === 0) return [root];
  for (let i = 0; i < packets.length; i++) {
    const [left, right] = [structuredClone(root), structuredClone(packets[i])];
    if (isOrdered(left, right)) {
      const stack = [root, ...setOrder(packets[i], cut(packets, i))];
      if (stack.length === packets.length + 1) return stack;
    }
  }
  return [];
};

export const solutionTwo = (input) => {
  const packets = [...input, '[[2]]', '[[6]]'].filter(Boolean).map(eval);
  const root = packets.map((p) => p.length).indexOf(0);
  const stack = setOrder(packets[root], cut(packets, root)).map(JSON.stringify);
  return (stack.indexOf('[[2]]') + 1) * (stack.indexOf('[[6]]') + 1);
};
```

## Sort with comparator

We can use the comparison function we wrote for part one to quickly sort the lines with the built in array sort method, but the final version of only finding the number of items that come before the ones we care about is ~3x faster (15ms vs 5ms).

The key insight to optimize away the search is to just find the number of items in the list that is smaller than `[[2]]` and `[[6]]`, then we account for indexing `twoIndex + 1` and `sixIndex + 2` (one for the extra missing `[[2]]` element (that we could have just added and only been off by one, but that's technically slower) and the other for the `0` indexing).

```js
const isOrdered = (left, right) => {
  if (left.length === 0 && right.length !== 0) return -1;
  if (left.length !== 0 && right.length === 0) return 1;
  if (left.length === 0 && right.length === 0) return 0;

  let [l, r] = [left.shift(), right.shift()];
  if (isArr(l) || isArr(r)) {
    if (!isArr(r)) r = [r];
    if (!isArr(l)) l = [l];
    return isOrdered(l, r) || isOrdered(left, right);
  } else {
    if (l > r) return 1;
    if (l < r) return -1;
    return isOrdered(left, right);
  }
};

export const solutionOne = (input) =>
  groupLines(input)
    .map((g) => g.map(eval))
    .map((p, i) => (isOrdered(...p) === -1 ? i + 1 : 0))
    .sum();

export const solutionTwo = (input) =>
  [...input, '[[2]]', '[[6]]']
    .filter(Boolean)
    .map(eval)
    .sort((a, b) => isOrdered(a.clone(), b.clone()))
    .map(JSON.stringify)
    .map((l, i) => (l === '[[2]]' || l === '[[6]]' ? i + 1 : 1))
    .product();
```
