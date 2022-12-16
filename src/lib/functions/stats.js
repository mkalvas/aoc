// Statistics functions
import '../extensions/array';

export const gauss = (n) => (n * (n + 1)) / 2;
export const isNum = (n) => typeof n === 'number';

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export const lcm = (a, b) => (a * b) / gcd(a, b);

export const max = (a) => a.max();
export const mean = (a) => a.mean();
export const median = (a, sorted) => a.median(sorted);
export const min = (a) => a.min();
