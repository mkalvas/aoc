# Naïve DFS

Works, but too slow for whole thing. Key insight to optimize away the search is to just find the number of items in the list that is smaller than `[[2]]` and `[[6]]`, then we account for indexing `twoIndex + 1` and `sixIndex + 2` (one for the extra missing `[[2]]` element (that we could have just added and only been off by one, but that's technically slower) and the other for the `0` indexing).

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
