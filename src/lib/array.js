// Array functions
export const product = (arr) => arr.reduce((p, n) => p * n, 1);
export const sum = (arr) => arr.reduce((s, n) => s + n, 0);
export const nums = (input) => input.map(Number);
export const numSort = (a, b) => a - b;
export const transpose = (a) => a[0].map((_, c) => a.map((r) => r[c]));
export const count = (a, v) => a.filter((x) => x === v).length;
export const range = (a, b) =>
  Array.from({ length: b - a + 1 }).map((_, i) => a + i);

export const counter = (a) =>
  a.reduce((c, v) => ({ ...c, [v]: (c[v] || 0) + 1 }), {});

export const arrayEquals = (a, b) =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

export const takeEvery = (a, every = 2, offset = 0) =>
  a.filter((_, i) => (i + offset) % every === 0);

export const groupEvery = (a, every) => {
  const groups = [];
  for (let i = 0; i < a.length; i += every) {
    groups.push(a.slice(i, i + every));
  }
  return groups;
};

export const zip = (a, b) =>
  a.length >= b.length
    ? a.map((v, i) => [v, b[i]])
    : b.map((v, i) => [a[i], v]);

export const cons = (a, size = 2) =>
  Array.from({ length: a.length - size + 1 }, (_, i) => a.slice(i, i + size));

export const diffs = (a) =>
  a.reduce((acc, x, i) => (i - 1 < 0 ? [] : [...acc, x - a[i - 1]]), []);

export const nbrs = (a, i, j, includeDiagonal = true, includeOrigin = true) => {
  let nbrs = [];
  for (const dr of [-1, 0, 1]) {
    for (const dc of [-1, 0, 1]) {
      const r = i + dr;
      const c = j + dc;
      const isDiagonal = Math.abs(dr) === Math.abs(dc) && dr !== 0 && dc !== 0;
      const isOrigin = dr === 0 && dc === 0;
      if (
        r >= 0 &&
        c >= 0 &&
        r < a.length &&
        c < a[i].length &&
        (includeDiagonal || !isDiagonal) &&
        (includeOrigin || !isOrigin)
      ) {
        nbrs.push([a[r][c], r, c]);
      }
    }
  }
  return nbrs;
};
