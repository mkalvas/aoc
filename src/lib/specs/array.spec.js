import * as array from '../array';

describe('product', () => {
  it('returns the product of the array', () => {
    expect(array.product([1, 2, 3])).toBe(6);
  });
});

describe('sum', () => {
  it('returns the sum of the array', () => {
    expect(array.sum([1, 2, 3])).toEqual(6);
  });
});

describe('nums', () => {
  it('converts an array of strings to numbers', () => {
    expect(array.nums(['1', '2', '3'])).toEqual([1, 2, 3]);
  });
});

describe('numSort', () => {
  it('sorts the array numerically', () => {
    expect([1, 10, 2, 20].sort(array.numSort)).toEqual([1, 2, 10, 20]);
  });
});

describe('transpose', () => {
  it('transposes a two dimensional matrix', () => {
    expect(
      array.transpose([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([
      [1, 3],
      [2, 4],
    ]);

    expect(array.transpose([[1, 2], [3]])).toEqual([
      [1, 3],
      [2, undefined],
    ]);
  });
});

describe('range', () => {
  it('returns a range between two numbers', () => {
    expect(array.range(2, 5)).toEqual([2, 3, 4, 5]);
  });
});

describe('arrayEquals', () => {
  it('compares arrays for value based equality', () => {
    expect(array.arrayEquals([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(array.arrayEquals([1, 2, 3], [1, 2, 4])).toEqual(false);
    expect(array.arrayEquals([1, 2, 3], [1, 2])).toEqual(false);
  });
});

describe('takeEvery', () => {
  it('takes every nth value', () => {
    expect(array.takeEvery([1, 2, 3, 4], 2)).toEqual([1, 3]);
  });
  it('takes every nth value with an offset', () => {
    expect(array.takeEvery([1, 2, 3, 4], 2, 1)).toEqual([2, 4]);
  });
});

describe('groupEvery', () => {
  it('groups an array into n-sized subarrays', () => {
    expect(array.groupEvery([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(array.groupEvery([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe('zip', () => {
  it('combines two arrays of arrays', () => {
    expect(array.zip([1, 2], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect(array.zip([1, 2], ['a'])).toEqual([
      [1, 'a'],
      [2, undefined],
    ]);
  });
});

describe('cons', () => {
  it('takes consecutive slices of size n', () => {
    expect(array.cons([1, 2, 3], 2)).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });
});

describe('diffs', () => {
  it('finds the difference between consecutive pairs of numbers', () => {
    expect(array.diffs([1, 2, 4])).toEqual([1, 2]);
  });
});
