# Other versions of 2020 day 15

## Attempt 1: working but very slow

```js
const getNthNumber = (seq, n) => {
  for (let i = seq.length - 1; i < seq.length; i++) {
    if (i + 1 === n) return seq.pop();
    seq.push(getNextNumber(seq.slice()));
  }
};

const getNextNumber = (arr) => {
  const lastItem = arr.pop();
  const prevIndex = arr.lastIndexOf(lastItem);
  return prevIndex === -1 ? 0 : arr.length - prevIndex;
};
```

## Attempt 2: a bit faster

```js
const getNthNumber = (input, n) => {
  let last = null;
  let count = 1;
  let map = input[0].split(',').reduce((acc, n) => {
    acc[n] = [...(acc[n] || []), count];
    last = n;
    count++;
    return acc;
  }, {});

  while (count <= n) {
    const cur = map[last] || [];
    last = cur.length > 1 ? cur[cur.length - 1] - cur[cur.length - 2] : 0;
    map[last] ||= [];
    map[last].push(count);
    count++;
  }

  return last;
};
```

## Attempt 3: working and quite performant

```js
const getNthNumber = (numbers, limit) => {
  let indices = new Map(numbers.map((value, index) => [value, index + 1]));
  let last = numbers[numbers.length - 1];
  let bucket = last;

  for (let i = numbers.length; i < limit; i++) {
    last = indices.has(last) ? i - indices.get(last) : 0;
    indices.set(bucket, i);
    bucket = last;
  }

  return last;
};
```

The final attempt in `./code.js` is the fastest by far though.
