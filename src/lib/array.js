// Array functions
export const sum = (arr) => arr.reduce((s, n) => s + n, 0);
export const parseInts = (input) => input.map(Number);
export const numericSort = (a, b) => a - b;
export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);
