import * as str from '../string';

describe('b2i', () => {
  it('returns the string reversed', () => {
    expect(str.reverse('123')).toBe('321');
  });
});

describe('b2i', () => {
  it('returns a decimal representation of a binary string', () => {
    expect(str.b2i('111')).toBe(7);
  });
});
