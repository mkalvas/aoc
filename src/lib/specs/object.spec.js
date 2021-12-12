import * as object from '../object';

describe('findKey', () => {
  it('returns the key for a given value', () => {
    expect(object.findKey({ a: 1, b: 2 }, 1)).toEqual('a');
  });

  it('returns undefined if the key is not in the object', () => {
    expect(object.findKey({ a: 1, b: 2 }, 3)).toBeUndefined();
  });
});
