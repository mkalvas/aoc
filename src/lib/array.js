// Array functions
export const sum = (arr) => arr.reduce((s, n) => s + n, 0);
export const parseInts = (input) => input.map(Number);
export const numericSort = (a, b) => a - b;

export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

export const zip = (a, b) =>
  a.length >= b.length
    ? a.map((v, i) => [v, b[i]])
    : b.map((v, i) => [a[i], v]);

export const zipSelf = (a) =>
  a.reduce((z, v, i) => (i < 1 ? [] : [...z, [a[i - 1], v]]), []);

export const takeEvery = (a, every = 2, offset = 0) =>
  a.filter((_, i) => (i + offset) % every === 0);
