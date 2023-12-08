// Statistics functions
import '../extensions/array';

export const isNum = (n) => typeof n === 'number';
export const gauss = (n) => (n * (n + 1)) / 2;

// -b ± √(b²-4ac) / 2a
export const quad = (a, b, c) => {
  const discriminant = b ** 2 - 4 * a * c;
  const left = (-b - Math.sqrt(discriminant)) / (2 * a);
  const right = (-b + Math.sqrt(discriminant)) / (2 * a);
  if (discriminant === 0) return [left];
  if (discriminant > 0) return [left, right];
  return [];
};

export const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export const lcm = (a, b) => (a * b) / gcd(a, b);

export const max = (a) => a.max();
export const mean = (a) => a.mean();
export const median = (a, sorted) => a.median(sorted);
export const min = (a) => a.min();
