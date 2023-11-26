import * as set from '../set';

describe('copy', () => {
  it('creates a copy of the set ', () => {
    const a = new Set([1, 2, 3]);
    const copy = set.copy(a);
    expect(copy).not.toBe(a);
    expect(copy).toEqual(a);
  });
});

describe('union', () => {
  it('returns the union of two sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);
    const expected = new Set([1, 2, 3, 4]);
    expect(set.union(a, b)).toEqual(expected);
  });
});

describe('intersect', () => {
  it('returns the intersection of two sets', () => {
    const a = new Set([1, 2, 3]);
    const b = new Set([2, 3, 4]);
    const expected = new Set([2, 3]);
    expect(set.intersect(a, b)).toEqual(expected);
  });
});

describe('difference', () => {
  it('returns the difference of two sets', () => {
    let a = new Set([1, 2, 3]);
    let b = new Set([2, 3, 4]);
    let expected = new Set([1]);
    expect(set.difference(a, b)).toEqual(expected);

    a = new Set([2, 3, 4]);
    b = new Set([1, 2, 3]);
    expected = new Set([4]);
    expect(set.difference(a, b)).toEqual(expected);
  });
});

describe('eq', () => {
  it('returns true if the sets contain exactly the same elements', () => {
    const exs = {
      a: new Set(),
      b: new Set(),
      c: new Set([1, 2, 3]),
      d: new Set([3, 1, 2]),
      e: new Set([1, 2, 3, 1, 2, 3]),
      f: new Set([1, 2]),
      g: new Set([1, 2, 3, 4]),
      h: new Set(['1', '2', '3']),
    };
    expect(set.eq(exs.a, exs.b)).toBe(true);
    expect(set.eq(exs.a, exs.c)).toBe(false);
    expect(set.eq(exs.c, exs.d)).toBe(true);
    expect(set.eq(exs.c, exs.e)).toBe(true);
    expect(set.eq(exs.c, exs.f)).toBe(false);
    expect(set.eq(exs.c, exs.g)).toBe(false);
    expect(set.eq(exs.g, exs.c)).toBe(false);
    expect(set.eq(exs.c, exs.h)).toBe(false);
  });
});
