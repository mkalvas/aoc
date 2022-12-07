import * as object from '../object';

describe('findKey', () => {
  it('returns the key for a given value', () => {
    expect(object.findKey({ a: 1, b: 2 }, 1)).toEqual('a');
  });

  it('returns undefined if the key is not in the object', () => {
    expect(object.findKey({ a: 1, b: 2 }, 3)).toBeUndefined();
  });
});

describe('keys', () => {
  it('returns keys', () => {
    expect(object.keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });
});

describe('vals', () => {
  it('returns vals', () => {
    expect(object.vals({ a: 1, b: 2 })).toEqual([1, 2]);
  });
});

describe('entries', () => {
  it('returns entries', () => {
    expect(object.entries({ a: 1, b: 2 })).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
