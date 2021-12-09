import * as stats from '../stats';

describe('mean', () => {
  it('returns the mean of an array', () => {
    expect(stats.mean([1, 2, 3])).toBe(2);
  });
});

describe('mean', () => {
  it('returns the median of an array', () => {
    expect(stats.median([1, 2, 2, 10])).toBe(2);
  });
});
