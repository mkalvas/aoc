# Other attempts at day 19

## Attempt 1: Missing something

The set is right but there's a join/flat needed somewhere in order to get it right that I couldn't figure out. This would be a great one to get working somehow. Super small and readable.

This one might be doable by just converting to (a|b) type regex groups

```js
export const parseRule = (rule) => {
  const parts = rule.split(': ');
  const paths = parts[1].split(' | ').map((o) => o.split(' '));
  return [parts[0], paths];
};

export const buildRule = (rules, ruleNumber) => {
  const rule = rules.find((r) => r.startsWith(`${ruleNumber}:`));
  const paths = parseRule(rule);

  return paths.map((tokenSet) =>
    tokenSet
      .map((token) => {
        if (token === 'a' || token === 'b') return token;
        return buildRule(rules, token);
      })
      .join('')
  );
};
```

## Attempt 2: Generator madness...

```js
function* runPath(g, path, m) {
  if (!path || (Array.isArray(path) && path.length === 0)) {
    yield m;
  } else {
    const [r, ...rest] = path;
    for (const s of run(g, r, m)) {
      yield* runPath(g, rest, s);
    }
  }
}

function* runPaths(g, paths, m) {
  for (const path of paths) {
    yield* runPath(g, path, m);
  }
}

function* run(g, r, m) {
  multiple alternative paths in grammar (g) for rule (r)
  if (Array.isArray(g[r])) {
    yield* runPaths(g, g[r], m);
  }
  terminal character rule
  if (m && m[0] === g[r]) {
    yield m.slice(1);
  }
}

const testMessage = (g, m) => {
  for (const result of run(g, '0', m)) {
    console.log(result);
    if (result === '') return 1;
  }
  return 0;
};
```
