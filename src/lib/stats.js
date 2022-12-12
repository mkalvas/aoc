// Statistics functions
import { numSort, sum } from './array';

// for arrays, use reduce a.reduce(gcd) or a.reduce(lcm)
export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export const lcm = (a, b) => (a * b) / gcd(a, b);

export const gauss = (n) => (n * (n + 1)) / 2;
export const mean = (a) => sum(a) / a.length;

export const median = (a, sorted = false) => {
  if (!sorted) a.sort(numSort);
  const mid = Math.floor(a.length / 2);
  if (a.length % 2) return (a[mid - 1] + a[mid]) / 2.0;
  return a[mid];
};
