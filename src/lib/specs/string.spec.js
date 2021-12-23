import * as str from '../string';

describe('b2d', () => {
  it('returns the string reversed', () => {
    expect(str.reverse('123')).toBe('321');
  });
});

describe('b2d', () => {
  it('returns a decimal representation of a binary string', () => {
    expect(str.b2d('111')).toBe(7);
  });
});
