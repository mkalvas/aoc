import * as str from '../string';

describe('chars', () => {
  it('returns an array of chars', () => {
    expect(str.chars('')).toEqual([]);
    expect(str.chars('123')).toEqual(['1', '2', '3']);
  });
});

describe('csv', () => {
  it('returns an array of strings', () => {
    expect(str.csv('')).toEqual(['']);
    expect(str.csv('123')).toEqual(['123']);
    expect(str.csv('1,23')).toEqual(['1', '23']);
    expect(str.csv('1,2,3')).toEqual(['1', '2', '3']);
  });
});

describe('b2d', () => {
  it('returns a decimal representation of a binary string', () => {
    expect(str.b2d('111')).toBe(7);
  });
});

describe('d2b', () => {
  it('returns a binary representation of a decimal', () => {
    expect(str.d2b(7)).toBe('111');
  });
});

describe('h2d', () => {
  it('returns a decimal representation of a hex string', () => {
    expect(str.h2d('1f')).toBe(31);
  });
});

describe('d2h', () => {
  it('returns a hex representation of a decimal', () => {
    expect(str.d2h(31)).toBe('1f');
  });
});

describe('p2s', () => {
  it('returns a string representation of a point', () => {
    expect(str.p2s([1, 2])).toBe('1,2');
  });
});

describe('s2p', () => {
  it('returns a point representation of a string', () => {
    expect(str.s2p('1,2')).toEqual([1, 2]);
  });
});

describe('lower', () => {
  it('returns the lowercased string', () => {
    expect(str.lower('aA')).toBe('aa');
  });
});

describe('ord', () => {
  it('returns the char code of a character', () => {
    expect(str.ord('a')).toBe(97);
    expect(str.ord('A')).toBe(65);
  });
});

describe('reverse', () => {
  it('returns the string reversed', () => {
    expect(str.reverse('123')).toBe('321');
  });

  it('handles arrays too!', () => {
    expect(str.reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe('upper', () => {
  it('returns the uppercased string', () => {
    expect(str.upper('aA')).toBe('AA');
  });
});

describe('wssv', () => {
  it('splits a string on any whitespace', () => {
    expect(str.wssv('a b')).toEqual(['a', 'b']);
    expect(str.wssv('a   b')).toEqual(['a', 'b']);
    expect(str.wssv('a\tb')).toEqual(['a', 'b']);
    expect(str.wssv('a\nb')).toEqual(['a', 'b']);
    expect(str.wssv('a\r\nb')).toEqual(['a', 'b']);
    expect(
      str.wssv(
        'a\r\n\t\f\v \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeffb'
      )
    ).toEqual(['a', 'b']);
  });
});
