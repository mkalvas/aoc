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
    expect(array.aofl(5, () => 'a')).toEqual(['a', 'a', 'a', 'a', 'a']);

    let mut = array.aofl(2, () => []);
    mut[0].push(1);
    expect(mut).toEqual([[1], []]);
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

describe('diffCount', () => {
  it('returns the count of different entries in two arrays', () => {
    expect(array.diffCount([1], [1])).toEqual(0);
    expect(array.diffCount([1, 2], [1, 1])).toEqual(1);
    expect(array.diffCount([1], [1, 1])).toEqual(1);
    expect(array.diffCount([1, 1], [1])).toEqual(1);
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

describe('monotonic', () => {
  it('returns whether the array is monotonic (lax)', () => {
    expect(array.monotonic([])).toBe(true);
    expect(array.monotonic([1])).toBe(true);
    expect(array.monotonic([1, 1])).toBe(true);
    expect(array.monotonic([1, 2, 3, 4])).toBe(true);
    expect(array.monotonic([1, 2, 3, 3])).toBe(true);
    expect(array.monotonic([4, 3, 2, 1])).toBe(true);
    expect(array.monotonic([3, 3, 2, 1])).toBe(true);
    expect(array.monotonic([3, 2, 3, 1])).toBe(false);
    expect(array.monotonic([3, 4, 3, 1])).toBe(false);
  });

  it('returns whether the array is monotonic (strict)', () => {
    expect(array.monotonic([], true)).toBe(true);
    expect(array.monotonic([1], true)).toBe(true);
    expect(array.monotonic([1, 1], true)).toBe(false);
    expect(array.monotonic([1, 2, 3, 4], true)).toBe(true);
    expect(array.monotonic([1, 2, 3, 3], true)).toBe(false);
    expect(array.monotonic([4, 3, 2, 1], true)).toBe(true);
    expect(array.monotonic([3, 3, 2, 1], true)).toBe(false);
    expect(array.monotonic([3, 2, 3, 1], true)).toBe(false);
    expect(array.monotonic([3, 4, 3, 1], true)).toBe(false);
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

describe('pluck', () => {
  it('plucks the indexes from the array', () => {
    expect(array.pluck([], [0])).toEqual([]);
    expect(array.pluck([1, 2, 3], [1])).toEqual([2]);
    expect(array.pluck([1, 2, 3], [4])).toEqual([]);
  });
});

describe('product', () => {
  it('returns the product of the array', () => {
    expect(array.product([])).toBe(1);
    expect(array.product([1, 2, 3])).toBe(6);
  });
});

describe('range', () => {
  it('returns an array of numbers from a to b inclusively', () => {
    expect(array.range(1, 3)).toEqual([1, 2, 3]);
  });
});

describe('repeat', () => {
  it('repeats the array flattened', () => {
    expect(array.repeat([1], 5)).toEqual([1, 1, 1, 1, 1]);
    expect(array.repeat([1, 2], 5)).toEqual([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);
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

describe('runion', () => {
  it('combines ranges', () => {
    expect(array.runion([0, 1], [2, 3])).toEqual([
      [0, 1],
      [2, 3],
    ]);
    expect(array.runion([2, 3], [0, 1])).toEqual([
      [2, 3],
      [0, 1],
    ]);
    expect(array.runion([0, 1], [1, 5])).toEqual([[0, 5]]);
    expect(array.runion([0, 2], [1, 5])).toEqual([[0, 5]]);
    expect(array.runion([0, 5], [1, 5])).toEqual([[0, 5]]);
    expect(array.runion([0, 6], [1, 5])).toEqual([[0, 6]]);
    expect(array.runion([1, 6], [1, 5])).toEqual([[1, 6]]);
    expect(array.runion([2, 6], [1, 5])).toEqual([[1, 6]]);
    expect(array.runion([5, 6], [1, 5])).toEqual([[1, 6]]);
    expect(array.runion([1, 2], [1, 5])).toEqual([[1, 5]]);
    expect(array.runion([3, 4], [1, 5])).toEqual([[1, 5]]);
    expect(array.runion([4, 5], [1, 5])).toEqual([[1, 5]]);
    expect(array.runion([1, 5], [1, 2])).toEqual([[1, 5]]);
    expect(array.runion([1, 5], [3, 4])).toEqual([[1, 5]]);
    expect(array.runion([1, 5], [4, 5])).toEqual([[1, 5]]);
  });
});

describe('rdiff', () => {
  it('combines ranges', () => {
    expect(array.rdiff([0, 6], [1, 5])).toEqual([
      [0, 0],
      [6, 6],
    ]);
    expect(array.rdiff([1, 5], [3, 4])).toEqual([
      [1, 2],
      [5, 5],
    ]);
    expect(array.rdiff([0, 1], [2, 3])).toEqual([[0, 1]]);
    expect(array.rdiff([2, 3], [0, 1])).toEqual([[2, 3]]);
    expect(array.rdiff([0, 2], [2, 5])).toEqual([[0, 1]]);
    expect(array.rdiff([0, 3], [2, 5])).toEqual([[0, 1]]);
    expect(array.rdiff([0, 5], [2, 5])).toEqual([[0, 1]]);
    expect(array.rdiff([1, 6], [1, 5])).toEqual([[6, 6]]);
    expect(array.rdiff([2, 6], [1, 5])).toEqual([[6, 6]]);
    expect(array.rdiff([5, 6], [1, 5])).toEqual([[6, 6]]);
    expect(array.rdiff([1, 2], [1, 5])).toEqual([]);
    expect(array.rdiff([3, 4], [1, 5])).toEqual([]);
    expect(array.rdiff([4, 5], [1, 5])).toEqual([]);
    expect(array.rdiff([1, 5], [1, 2])).toEqual([[3, 5]]);
    expect(array.rdiff([1, 5], [4, 5])).toEqual([[1, 3]]);
  });
});

describe('rintersect', () => {
  it('combines ranges', () => {
    expect(array.rintersect([0, 6], [1, 5])).toEqual([[1, 5]]);
    expect(array.rintersect([1, 5], [3, 4])).toEqual([[3, 4]]);
    expect(array.rintersect([0, 1], [2, 3])).toEqual([]);
    expect(array.rintersect([2, 3], [0, 1])).toEqual([]);
    expect(array.rintersect([0, 2], [2, 5])).toEqual([[2, 2]]);
    expect(array.rintersect([0, 3], [2, 5])).toEqual([[2, 3]]);
    expect(array.rintersect([0, 5], [2, 5])).toEqual([[2, 5]]);
    expect(array.rintersect([1, 6], [1, 5])).toEqual([[1, 5]]);
    expect(array.rintersect([2, 6], [1, 5])).toEqual([[2, 5]]);
    expect(array.rintersect([5, 6], [1, 5])).toEqual([[5, 5]]);
    expect(array.rintersect([1, 2], [1, 5])).toEqual([[1, 2]]);
    expect(array.rintersect([3, 4], [1, 5])).toEqual([[3, 4]]);
    expect(array.rintersect([4, 5], [1, 5])).toEqual([[4, 5]]);
    expect(array.rintersect([1, 5], [1, 2])).toEqual([[1, 2]]);
    expect(array.rintersect([1, 5], [4, 5])).toEqual([[4, 5]]);
  });
});
