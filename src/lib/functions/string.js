// String functions
export const FULL = '█';
export const EMPT = ' ';
export const HALF = '·';

export const chars = (s) => s.split('');

export const b2d = (b) => parseInt(b, 2);
export const d2b = (i) => i.toString(2);

export const h2d = (h) => parseInt(h, 16);
export const d2h = (i) => i.toString(16);

export const p2s = (a) => a.map((x) => `${x}`).join(',');
export const s2p = (s) => s.split(',').map(Number);

export const lower = (s) => s.toLowerCase();
export const ord = (c) => c.charCodeAt();
export const upper = (s) => s.toUpperCase();

export const reverse = (v) => {
  if (Array.isArray(v)) return v.reverse();
  return v.split('').reverse().join('');
};
