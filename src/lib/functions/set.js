// Set functions
export const copy = (a) => new Set([...a]);
export const union = (a, b) => new Set([...a, ...b]);
export const intersect = (a, b) => new Set([...a].filter((x) => b.has(x)));
export const difference = (a, b) => new Set([...a].filter((x) => !b.has(x)));
export const eq = (a, b) =>
  difference(a, b).size === 0 && difference(b, a).size === 0;
