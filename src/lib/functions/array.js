import '../extensions/array';

// delegated to prototype extensions
export const accumulate = (a, fn) => a.accumulate(fn);
export const asc = (a) => a.asc();
export const clone = (a) => a.clone();
export const combinations = (a) => a.combinations();
export const cons = (a, size) => a.cons(size);
export const count = (a, v) => a.count(v);
export const counter = (a) => a.counter();
export const cut = (a, i) => a.cut(i);
export const desc = (a) => a.desc();
export const diffs = (a) => a.diffs();
export const groupEvery = (a, every) => a.groupEvery(every);
export const nbrs = (a, y, x, diag, origin, oob, oobDefault) =>
  a.nbrs(y, x, diag, origin, oob, oobDefault);
export const nums = (a) => a.nums();
export const product = (a) => a.product();
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
export const aofl = (length, v = undefined) => Array.from({ length }).fill(v);
