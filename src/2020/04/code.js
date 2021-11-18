import { groupLines } from '../../lib';

const isPresent = (passport, key) => passport.hasOwnProperty(key);

const validNumberRange = (min, max) => (passport, key) => {
  const number = parseInt(passport[key]);
  return min <= number && number <= max;
};

const validHeight = (passport, key) => {
  const units = passport[key].slice(-2);
  const value = passport[key].slice(0, -2);
  if (units === 'cm') return validNumberRange(150, 193)(passport, key);
  if (units === 'in') return validNumberRange(59, 76)(passport, key);
  return false;
};

const validEyeColor = (passport, key) =>
  passport[key].match(/^(amb|blu|brn|gry|grn|hzl|oth)$/g) !== null;

const validHairColor = (passport, key) =>
  passport[key].match(/^#[0-9a-f]{6}$/g) !== null;

const validId = (passport, key) => passport[key].match(/^[0-9]{9}$/g) !== null;

export const createPassport = (lines) =>
  lines.reduce((passport, line) => {
    line.split(' ').map((f) => {
      const kv = f.split(':');
      passport[kv[0]] = kv[1];
    });

    delete passport['cid'];
    return passport;
  }, {});

const validateKeys = (keyValidators, passport) =>
  Object.keys(keyValidators).reduce(
    (isValid, k) =>
      isValid !== false &&
      passport.hasOwnProperty(k) &&
      keyValidators[k](passport, k),
    null
  );

const solution = (keyValidators) => (input) =>
  groupLines(input)
    .map(createPassport)
    .filter((passport) => validateKeys(keyValidators, passport)).length;

export const solutionOne = solution({
  byr: isPresent,
  iyr: isPresent,
  eyr: isPresent,
  hgt: isPresent,
  ecl: isPresent,
  pid: isPresent,
  hcl: isPresent,
});

export const solutionTwo = solution({
  byr: validNumberRange(1920, 2002),
  iyr: validNumberRange(2010, 2020),
  eyr: validNumberRange(2020, 2030),
  hgt: validHeight,
  hcl: validHairColor,
  ecl: validEyeColor,
  pid: validId,
});
