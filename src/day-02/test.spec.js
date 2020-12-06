import {
  buildRecords,
  solutionOne,
  solutionTwo,
  validatorOne,
  validatorTwo,
} from './code';

const INPUT = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

const RECORD_1 = {
  password: 'abcde',
  policy: {
    min: 1,
    max: 3,
    pattern: 'a',
  },
};

const RECORD_2 = {
  password: 'cdefg',
  policy: {
    min: 1,
    max: 3,
    pattern: 'b',
  },
};

const RECORD_3 = {
  password: 'ccccccccc',
  policy: {
    min: 2,
    max: 9,
    pattern: 'c',
  },
};

describe('record parser', () => {
  it('parses raw input lines into records', () => {
    expect(buildRecords(INPUT)).toEqual([RECORD_1, RECORD_2, RECORD_3]);
  });
});

describe('puzzle one', () => {
  it('counts the number of valid passwords', () => {
    expect(solutionOne(INPUT)).toBe(2);
  });

  describe('validator', () => {
    it('returns whether the string matches the policy', () => {
      expect(validatorOne(RECORD_1)).toBe(true);
      expect(validatorOne(RECORD_2)).toBe(false);
      expect(validatorOne(RECORD_3)).toBe(true);
    });
  });
});

describe('puzzle two', () => {
  it('counts the number of valid passwords', () => {
    expect(solutionTwo(INPUT)).toBe(1);
  });

  describe('validator', () => {
    it('returns whether the string matches the policy', () => {
      expect(validatorTwo(RECORD_1)).toBe(true);
      expect(validatorTwo(RECORD_2)).toBe(false);
      expect(validatorTwo(RECORD_3)).toBe(false);
    });
  });
});
