export const findKey = (o, v) => Object.keys(o).find((k) => o[k] === v);
export const vals = (o) => Object.values(o);
export const keys = (o) => Object.keys(o);
export const entries = (o) =>
  Array.isArray(o) ? [...o.entries()] : Object.entries(o);
