import * as stats from '../stats';

describe('gauss', () => {
  it('returns the gauss sum', () => {
    expect(stats.gauss(10)).toBe(55);
  });
});

describe('isNum', () => {
  it('returns true if the value is a number', () => {
    expect(stats.isNum('')).toBe(false);
    expect(stats.isNum([])).toBe(false);
    expect(stats.isNum({})).toBe(false);
    expect(stats.isNum(true)).toBe(false);
    expect(stats.isNum(null)).toBe(false);
    expect(stats.isNum(() => {})).toBe(false);
    expect(stats.isNum(Symbol())).toBe(false);
    expect(stats.isNum(undefined)).toBe(false);
    expect(stats.isNum(BigInt(1))).toBe(false);
    expect(stats.isNum(1)).toBe(true);
    expect(stats.isNum(1.2)).toBe(true);
    expect(stats.isNum(1e10)).toBe(true);
    expect(stats.isNum(0x10)).toBe(true);
    expect(stats.isNum(0b10)).toBe(true);
    expect(stats.isNum(0o10)).toBe(true);
  });
});

describe('quad', () => {
  it('returns the quadratic formula solutions', () => {
    // two real roots
    expect(stats.quad(0.5, -(5 / 2), 2)).toEqual([1, 4]);
    expect(stats.quad(1, -8, 5)).toEqual([
      4 - Math.sqrt(11),
      4 + Math.sqrt(11),
    ]);

    // one real root
    expect(stats.quad(4, -12, 9)).toEqual([1.5]);

    // for complex roots, we just remove them as solutions instead of returning
    // [NaN, NaN]
    expect(stats.quad(5, 20, 32)).toEqual([]);
  });
});

describe('gcd', () => {
  it('finds the gcd of two numbers', () => {
    expect(stats.gcd(1, 2)).toBe(1);
    expect(stats.gcd(8, 10)).toBe(2);
    expect(stats.gcd(10, 15)).toBe(5);
  });
});

describe('lcm', () => {
  it('finds the lcm of two numbers', () => {
    expect(stats.lcm(1, 2)).toBe(2);
    expect(stats.lcm(8, 10)).toBe(40);
    expect(stats.lcm(10, 15)).toBe(30);
  });
});

describe('max', () => {
  it('calculates the max for the array', () => {
    expect(stats.max([1, 2, 3])).toBe(3);
  });
});

describe('mean', () => {
  it('calculates the mean for the array', () => {
    expect(stats.mean([0, 1, 2, 3, 4])).toBe(2);
  });
});

describe('median', () => {
  it('calculates the median for the array', () => {
    expect(stats.median([3, 2, 1, 2, 2])).toBe(2);
  });

  it('allows pre-sorted optimization via a flag', () => {
    expect(stats.median([1, 2, 2, 3], true)).toBe(2);
  });
});

describe('min', () => {
  it('calculates the min for the array', () => {
    expect(stats.min([1, 2, 3])).toBe(1);
  });
});
