import '../array';

describe('accumulate', () => {
  it('returns the running sum', () => {
    expect([1, 2, 3, 4, 5].accumulate()).toEqual([1, 3, 6, 10, 15]);
  });

  it('returns the stepped accumulation for a given binary function', () => {
    expect([1, 2, 3, 4, 5].accumulate((t = 1, e) => t * e)).toEqual([
      1, 2, 6, 24, 120,
    ]);
  });

  it('returns running concatenation of strings', () => {
    expect(['1', '2', '3'].accumulate()).toEqual(['1', '12', '123']);
  });
});

describe('asc', () => {
  it('sorts the array numerically ascending', () => {
    expect([1, 10, 2, 20].asc()).toEqual([1, 2, 10, 20]);
  });
});

describe('clone', () => {
  it('clones without reference', () => {
    let a = [1, 2, 3];
    let b = a.clone();
    a[0] = 'x';
    expect(a).toEqual(['x', 2, 3]);
    expect(b).toEqual([1, 2, 3]);
  });

  it('deep clones', () => {
    let a = [1, [2], 3];
    let b = a.clone();
    a[1].pop();
    expect(a).toEqual([1, [], 3]);
    expect(b).toEqual([1, [2], 3]);
  });
});

describe('cons', () => {
  it('takes consecutive slices of size n', () => {
    expect([1, 2, 3].cons(2)).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });

  it('defaults to size 2', () => {
    expect([1, 2, 3].cons()).toEqual([
      [1, 2],
      [2, 3],
    ]);
  });
});

describe('count', () => {
  it('returns the count of a value in the array', () => {
    expect([2, 5, 2, 3, 2].count(2)).toEqual(3);
    expect(['a', 'b', 'a'].count('a')).toEqual(2);
  });
});

describe('counter', () => {
  it('returns the count of all values in the array', () => {
    expect(['a', 'b', 'a'].counter()).toEqual({ a: 2, b: 1 });
  });
});

describe('cut', () => {
  it('returns a new array without the element at the index', () => {
    expect([1, 2, 3].cut(1)).toEqual([1, 3]);
  });
});

describe('desc', () => {
  it('sorts the array numerically descending', () => {
    expect([1, 10, 2, 20].desc()).toEqual([20, 10, 2, 1]);
  });
});

describe('diffCount', () => {
  it('returns the count of different entries in two arrays', () => {
    expect([1].diffCount([1])).toEqual(0);
    expect([1, 2].diffCount([1, 1])).toEqual(1);
    expect([1].diffCount([1, 1])).toEqual(1);
    expect([1, 1].diffCount([1])).toEqual(1);
  });
});

describe('diffs', () => {
  it('finds the difference between consecutive pairs of numbers', () => {
    expect([1, 2, 4].diffs()).toEqual([1, 2]);
  });
});

describe('eq', () => {
  it('compares arrays for value based equality', () => {
    expect([1, 2, 3].eq([1, 2, 3])).toEqual(true);
    expect([1, 2, 3].eq([1, 2, 4])).toEqual(false);
    expect([1, 2, 3].eq([1, 2])).toEqual(false);
  });
});

describe('gcd', () => {
  it('finds the gcd of the array', () => {
    expect([1, 2].gcd()).toBe(1);
    expect([8, 10].gcd()).toBe(2);
    expect([10, 15].gcd()).toBe(5);
  });
});

describe('groupEvery', () => {
  it('groups an array into n-sized subarrays', () => {
    expect([1, 2, 3, 4].groupEvery(3)).toEqual([[1, 2, 3], [4]]);
    expect([1, 2, 3, 4].groupEvery(2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe('id', () => {
  it('generates an md5 hash of the string of the array', () => {
    // independently generated for verification with [1,2].toString() = '1,2'
    expect([1, 2].id()).toBe('05cf281c050be3da4eecf3bc6e8aac1b');
  });
});

describe('lcm', () => {
  it('finds the lcm of the array', () => {
    expect([1, 2].lcm()).toBe(2);
    expect([8, 10].lcm()).toBe(40);
    expect([10, 15].lcm()).toBe(30);
  });
});

describe('max', () => {
  it('calculates the max for the array', () => {
    expect([1, 2, 3].max()).toBe(3);
  });
});

describe('mean', () => {
  it('calculates the mean for the array', () => {
    expect([0, 1, 2, 3, 4].mean()).toBe(2);
  });
});

describe('median', () => {
  it('calculates the median for the array', () => {
    expect([1, 2, 2, 2, 3].median()).toBe(2);
  });

  it('allows skipping sorting', () => {
    expect([1, 2, 2, 3].median(true)).toBe(2);
  });
});

describe('min', () => {
  it('calculates the min for the array', () => {
    expect([1, 2, 3].min()).toBe(1);
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
    expect(grid.nbrs(3, 2)).toEqual([
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
    expect(grid.nbrs(3, 2, false)).toEqual([
      ['b', 2, 2],
      ['d', 3, 1],
      ['e', 3, 2],
      ['f', 3, 3],
      ['h', 4, 2],
    ]);
  });

  it('returns the neighbors of a cell without diagonals nor origin', () => {
    expect(grid.nbrs(3, 2, false, false)).toEqual([
      ['b', 2, 2],
      ['d', 3, 1],
      ['f', 3, 3],
      ['h', 4, 2],
    ]);
  });
});

describe('nums', () => {
  it('converts an array of strings to numbers', () => {
    expect(['1', '2', '3'].nums()).toEqual([1, 2, 3]);
  });
});

describe('product', () => {
  it('returns the product of the array', () => {
    expect([1, 2, 3].product()).toBe(6);
  });
});

describe('sum', () => {
  it('returns the sum of the array', () => {
    expect([1, 2, 3].sum()).toEqual(6);
  });
});

describe('takeEvery', () => {
  it('takes every nth value', () => {
    expect([1, 2, 3, 4].takeEvery(2)).toEqual([1, 3]);
  });

  it('takes every nth value with an offset', () => {
    expect([1, 2, 3, 4].takeEvery(2, 1)).toEqual([2, 4]);
  });

  it('defaults to take 2 with 0 offset', () => {
    expect([1, 2, 3, 4].takeEvery()).toEqual([1, 3]);
  });
});

describe('takeWhile', () => {
  it('takes from the front of the array before condition is false', () => {
    expect([1, 2, 3, 1].takeWhile((i) => i < 3)).toEqual([1, 2]);
  });

  it('defaults to take while truthy', () => {
    expect([1, 2, 0, 1].takeWhile()).toEqual([1, 2]);
  });

  it('takes the whole array if never false', () => {
    expect([1].takeWhile()).toEqual([1]);
  });
});

describe('transpose', () => {
  it('transposes a two dimensional matrix', () => {
    expect(
      [
        [1, 2],
        [3, 4],
      ].transpose()
    ).toEqual([
      [1, 3],
      [2, 4],
    ]);

    expect([[1, 2], [3]].transpose()).toEqual([
      [1, 3],
      [2, undefined],
    ]);
  });
});

describe('truthy', () => {
  it('filters the array on Boolean existence', () => {
    expect(['', 0].truthy()).toEqual([]);
    expect(['a', 1, []].truthy()).toEqual(['a', 1, []]);
  });
});

describe('zip', () => {
  it('combines two arrays of arrays', () => {
    expect([1, 2].zip(['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
    ]);
    expect([1, 2].zip(['a'])).toEqual([
      [1, 'a'],
      [2, undefined],
    ]);

    expect([1].zip(['a', 'b'])).toEqual([
      [1, 'a'],
      [undefined, 'b'],
    ]);
  });
});
