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

describe('count', () => {
  it('returns the count of a value in the array', () => {
    expect(array.count([2, 5, 2, 3, 2], 2)).toEqual(3);
    expect(array.count(['a', 'b', 'a'], 'a')).toEqual(2);
  });
});

describe('counter', () => {
  it('returns the count of all values in the array', () => {
    expect(array.counter(['a', 'b', 'a'])).toEqual({ a: 2, b: 1 });
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

describe('accumulate', () => {
  it('returns the running sum', () => {
    expect(array.accumulate([1, 2, 3, 4, 5])).toEqual([1, 3, 6, 10, 15]);
  });

  it('returns the stepped accumulation for a given binary function', () => {
    expect(array.accumulate([1, 2, 3, 4, 5], (t = 1, e) => t * e)).toEqual([
      1, 2, 6, 24, 120,
    ]);
  });

  it('returns running concatenation of strings', () => {
    expect(array.accumulate(['1', '2', '3'])).toEqual(['1', '12', '123']);
  });
});

describe('nbrs', () => {
  const grid = [
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
    ['x', 'a', 'b', 'c', 'x'],
    ['x', 'd', 'e', 'f', 'x'],
    ['x', 'g', 'h', 'i', 'x'],
    ['x', 'x', 'x', 'x', 'x'],
  ];

  it('returns the neighbors of a cell with diagonals and origin', () => {
    expect(array.nbrs(grid, 3, 2)).toEqual([
      ['a', 2, 1],
      ['b', 2, 2],
      ['c', 2, 3],
      ['d', 3, 1],
      ['e', 3, 2],
      ['f', 3, 3],
      ['g', 4, 1],
      ['h', 4, 2],
      ['i', 4, 3],
    ]);
  });

  it('returns the neighbors of a cell without diagonals and with origin', () => {
    expect(array.nbrs(grid, 3, 2, false)).toEqual([
      ['b', 2, 2],
      ['d', 3, 1],
      ['e', 3, 2],
      ['f', 3, 3],
      ['h', 4, 2],
    ]);
  });

  it('returns the neighbors of a cell without diagonals nor origin', () => {
    expect(array.nbrs(grid, 3, 2, false, false)).toEqual([
      ['b', 2, 2],
      ['d', 3, 1],
      ['f', 3, 3],
      ['h', 4, 2],
    ]);
  });
});
