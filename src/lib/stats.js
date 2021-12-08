// Statistics functions
import { numSort, sum } from './array';

export const mean = (a) => sum(a) / a.length;

export const median = (a, sorted = false) => {
  if (!sorted) a.sort(numSort);
  const mid = Math.floor(a.length / 2);
  if (a.length % 2) return (a[mid - 1] + a[mid]) / 2.0;
  return a[mid];
};
