# First pass

Only at the very end did I see the obvious refactor that brings the `op` function out and simplifies the `if ... else`

```js
const run = (input) => {
  let img = new Array(6).fill('');
  let state = { cycle: 1, sum: 0, pos: 1, img };
  for (let ins of input) {
    if (ins === 'noop') {
      state.sum += strength(state);
      state.img[Math.floor((state.cycle - 1) / 40)] += draw(state);
      state.cycle++;
    } else {
      state.sum += strength(state);
      state.img[Math.floor((state.cycle - 1) / 40)] += draw(state);
      state.cycle++;

      state.sum += strength(state);
      state.img[Math.floor((state.cycle - 1) / 40)] += draw(state);
      state.pos += +ins.split(' ')[1];
      state.cycle++;
    }
  }
  return state;
};
```

```js
const op = (state, val) => {
  state.sum += DBG.includes(cycle) ? pos * cycle : 0;
  state.img[Math.floor((state.cycle - 1) / 40)] += draw(state);
  if (val) state.pos += val;
  state.cycle++;
};

const run = (input) => {
  let state = { cycle: 1, sum: 0, pos: 1, img: new Array(6).fill('') };
  for (let ins of input) {
    op(state);
    if (ins !== 'noop') op(state, +ins.split(' ')[1]);
  }
  return state;
};
```
