import '../extensions/array';

export const OBJ_DELTAS = { R: [1, 0], L: [-1, 0], U: [0, -1], D: [0, 1] };

//         clockwise via (dir + 1) % 4
// counter-clockwise via (dir - 1) % 4
export const MH_DELTAS = [
  [0, -1], // up
  [1, 0], // right
  [0, 1], // down
  [-1, 0], // left
];

// delegated to prototype extensions
export const accumulate = (a, fn) => a.accumulate(fn);
export const asc = (a) => a.asc();
export const cartesian = (a) => a.cartesian();
export const clone = (a) => a.clone();
export const combinations = (a) => a.combinations();
export const cons = (a, size) => a.cons(size);
export const count = (a, v) => a.count(v);
export const counter = (a) => a.counter();
export const cut = (a, i) => a.cut(i);
export const desc = (a) => a.desc();
export const diffCount = (a, b) => a.diffCount(b);
export const diffs = (a) => a.diffs();
export const groupEvery = (a, every) => a.groupEvery(every);
export const insert = (a, v, i) => a.insert(v, i);
export const monotonic = (a, strict) => a.monotonic(strict);
export const nbrs = (a, y, x, diag, origin, oob, oobDefault) =>
  a.nbrs(y, x, diag, origin, oob, oobDefault);
export const nums = (a) => a.nums();
export const pluck = (a, idxs) => a.pluck(idxs);
export const product = (a) => a.product();
export const repeat = (a, times) => a.repeat(times);
export const sum = (a) => a.sum();
export const takeEvery = (a, every, offset) => a.takeEvery(every, offset);
export const takeWhile = (a, fn) => a.takeWhile(fn);
export const transpose = (a) => a.transpose();
export const truthy = (a) => a.truthy();
export const zip = (a, b) => a.zip(b);

// static
export const arrId = (a) => a.id();
export const arrEq = (a, b) => a.eq(b);
export const isArr = (a) => Array.isArray(a);
export const numSort = (a, b) => a - b;
export const range = (a, b) =>
  Array.from({ length: b - a + 1 }).map((_, i) => a + i);
export const aofl = (length, fn = () => {}) => Array.from({ length }, fn);

export const pwSort = (a, b, sort = (x, y) => x - y) => {
  if (a.length !== b.length) throw Error('arrays must be same length');
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return sort(a[i], b[i]);
  }
  return 0;
};

export const pwCmp = (a, b, cmp = (x, y) => x < y) => {
  if (a.length !== b.length) throw Error('arrays must be same length');
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return cmp(a[i], b[i]);
  }
  return false;
};

// requires increasing ranges
export const runion = ([s1, e1], [s2, e2]) => {
  //    |-1-| |-2-| s1-e1, s2-e2
  // or |-2-| |-1-|
  if (e1 < s2 || e2 < s1)
    return [
      [s1, e1],
      [s2, e2],
    ];

  // |-1-|-|-| s1-e2
  //     |-2-|
  if (s1 <= s2 && e1 <= e2) return [[s1, e2]];

  // |-|-1-|-| s1-e1
  //   |-2-|
  if (s1 <= s2 && e2 <= e1) return [[s1, e1]];

  // |-|-|-1-| s2-e1
  // |-2-|
  if (s2 <= s1 && e2 <= e1) return [[s2, e1]];

  //   |-1-|   s2-e2
  // |-|-2-|-|
  if (s2 <= s1 && e1 <= e2) return [[s2, e2]];
};

// requires increasing ranges and integer step
export const rdiff = ([s1, e1], [s2, e2]) => {
  //    |-1-| |-2-|
  // or |-2-| |-1-|
  if (e1 < s2 || e2 < s1) return [[s1, e1]];

  // |-1-|-|-| s1–(s2-1)
  //     |-2-|
  if (s1 < s2 && e1 <= e2) return [[s1, s2 - 1]];

  // |-|-|-1-| s2-e1
  // |-2-|
  if (s2 <= s1 && e2 < e1) return [[e2 + 1, e1]];

  // |-|-1-|-| s1-(s2-1), (e2+1)-e1
  //   |-2-|
  if (s1 <= s2 && e2 <= e1)
    return [
      [s1, s2 - 1],
      [e2 + 1, e1],
    ];

  //   |-1-|   empty
  // |-|-2-|-|
  if (s2 <= s1 && e1 <= e2) return [];
};

// requires increasing ranges
export const rintersect = ([s1, e1], [s2, e2]) => {
  //    |-1-| |-2-| []
  // or |-2-| |-1-|
  if (e1 < s2 || e2 < s1) return [];

  // |-1-|-|-| s2-e1
  //     |-2-|
  if (s1 <= s2 && e1 <= e2) return [[s2, e1]];

  // |-|-1-|-| s2-e2
  //   |-2-|
  if (s1 <= s2 && e2 <= e1) return [[s2, e2]];

  // |-|-|-1-| s1-e2
  // |-2-|
  if (s2 <= s1 && e2 <= e1) return [[s1, e2]];

  //   |-1-|   s1-e1
  // |-|-2-|-|
  if (s2 <= s1 && e1 <= e2) return [[s1, e1]];
};
