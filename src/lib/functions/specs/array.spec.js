import * as array from '../array';

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

describe('aofl', () => {
  it('returns an array with given length and values', () => {
    expect(array.aofl(0)).toEqual([]);
    expect(array.aofl(2)).toEqual([undefined, undefined]);
    expect(array.aofl(5, 'a')).toEqual(['a', 'a', 'a', 'a', 'a']);
  });
});

describe('asc', () => {
  it('sorts the array numerically ascending', () => {
    expect(array.asc([1, 10, 2, 20])).toEqual([1, 2, 10, 20]);
  });
});

describe('clone', () => {
  it('clones without reference', () => {
    let a = [1, 2, 3];
    let b = array.clone(a);
    a[0] = 'x';
    expect(a).toEqual(['x', 2, 3]);
    expect(b).toEqual([1, 2, 3]);
  });

  it('deep clones', () => {
    let a = [1, [2], 3];
    let b = array.clone(a);
    a[1].pop();
    expect(a).toEqual([1, [], 3]);
    expect(b).toEqual([1, [2], 3]);
  });
});

describe('combinations', () => {
  it('returns the combinations of elements in an array', () => {
    expect(array.combinations([1, 2, 3])).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
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

  it('defaults to size 2', () => {
    expect(array.cons([1, 2, 3])).toEqual([
      [1, 2],
      [2, 3],
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

describe('cut', () => {
  it('returns a new array without the element at the index', () => {
    expect(array.cut([1, 2, 3], 1)).toEqual([1, 3]);
  });
});

describe('desc', () => {
  it('sorts the array numerically descending', () => {
    expect(array.desc([1, 10, 2, 20])).toEqual([20, 10, 2, 1]);
  });
});

describe('diffs', () => {
  it('finds the difference between consecutive pairs of numbers', () => {
    expect(array.diffs([1, 2, 4])).toEqual([1, 2]);
  });
});

describe('eq', () => {
  it('compares arrays for value based equality', () => {
    expect(array.arrEq([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(array.arrEq([1, 2, 3], [1, 2, 4])).toEqual(false);
    expect(array.arrEq([1, 2, 3], [1, 2])).toEqual(false);
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

describe('isArr', () => {
  it('returns true if the argument is an Array', () => {
    expect(array.isArr([])).toBe(true);
    expect(array.isArr('[]')).toBe(false);
  });
});

describe('id', () => {
  it('generates an md5 hash of the string of the array', () => {
    // independently generated for verification with [1,2].toString() = '1,2'
    expect(array.arrId([1, 2])).toBe('05cf281c050be3da4eecf3bc6e8aac1b');
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

  it('returns the neighbors with out of bounds elements', () => {
    expect(array.nbrs([[1]], 0, 0, true, true, true, 0)).toEqual([
      [0, -1, -1],
      [0, -1, 0],
      [0, -1, 1],
      [0, 0, -1],
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, -1],
      [0, 1, 0],
      [0, 1, 1],
    ]);
  });
});

describe('nums', () => {
  it('converts an array of strings to numbers', () => {
    expect(array.nums(['1', '2', '3'])).toEqual([1, 2, 3]);
  });
});

describe('numSort', () => {
  it('sorts the array numerically ascending', () => {
    expect([1, 10, 2, 20].sort(array.numSort)).toEqual([1, 2, 10, 20]);
  });
});

describe('product', () => {
  it('returns the product of the array', () => {
    expect(array.product([1, 2, 3])).toBe(6);
  });
});

describe('range', () => {
  it('returns an array of numbers from a to b inclusively', () => {
    expect(array.range(1, 3)).toEqual([1, 2, 3]);
  });
});

describe('sum', () => {
  it('returns the sum of the array', () => {
    expect(array.sum([1, 2, 3])).toEqual(6);
  });
});

describe('takeEvery', () => {
  it('takes every nth value', () => {
    expect(array.takeEvery([1, 2, 3, 4], 2)).toEqual([1, 3]);
  });

  it('takes every nth value with an offset', () => {
    expect(array.takeEvery([1, 2, 3, 4], 2, 1)).toEqual([2, 4]);
  });

  it('defaults to take 2 with 0 offset', () => {
    expect(array.takeEvery([1, 2, 3, 4])).toEqual([1, 3]);
  });
});

describe('takeWhile', () => {
  it('takes from the front of the array before condition is false', () => {
    expect(array.takeWhile([1, 2, 3, 1], (i) => i < 3)).toEqual([1, 2]);
  });

  it('defaults to take while truthy', () => {
    expect(array.takeWhile([1, 2, 0, 1])).toEqual([1, 2]);
  });

  it('takes the whole array if never false', () => {
    expect(array.takeWhile([1])).toEqual([1]);
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

describe('truthy', () => {
  it('filters the array on Boolean existence', () => {
    expect(array.truthy(['', 0])).toEqual([]);
    expect(array.truthy(['a', 1, []])).toEqual(['a', 1, []]);
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

    expect(array.zip([1], ['a', 'b'])).toEqual([
      [1, 'a'],
      [undefined, 'b'],
    ]);
  });
});
