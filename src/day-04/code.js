const validateName = (passport, key) => passport.hasOwnProperty(key);

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

const REQUIRED_KEYS_ONE = {
  byr: validateName,
  iyr: validateName,
  eyr: validateName,
  hgt: validateName,
  ecl: validateName,
  pid: validateName,
  hcl: validateName,
};

const REQUIRED_KEYS_TWO = {
  byr: validNumberRange(1920, 2002),
  iyr: validNumberRange(2010, 2020),
  eyr: validNumberRange(2020, 2030),
  hgt: validHeight,
  hcl: validHairColor,
  ecl: validEyeColor,
  pid: validId,
};

export const createPassport = (lines) =>
  lines.reduce((passport, line) => {
    const fields = line.split(' ');
    fields.map((f) => {
      const kv = f.split(':');
      passport[kv[0]] = kv[1];
    });

    delete passport['cid'];
    return passport;
  }, {});

export const groupLines = (lines) =>
  lines.reduce(
    (groups, line) => {
      if (line === '') return [...groups, []];
      groups[groups.length - 1].push(line);
      return groups;
    },
    [[]]
  );

const validateKeys = (requiredKeys, passport) => {
  const result = Object.keys(requiredKeys).reduce((isValid, k) => {
    if (isValid === false) return false;
    if (!passport.hasOwnProperty(k)) return false;

    return requiredKeys[k](passport, k);
  }, null);

  return result;
};

const passportValidator = (requiredKeys, passport) => {
  const keys = Object.keys(passport);
  if (validateKeys(requiredKeys, passport)) return true;
  return false;
};

export const puzzleOne = (input) =>
  groupLines(input)
    .map(createPassport)
    .filter((passport) => passportValidator(REQUIRED_KEYS_ONE, passport))
    .length;

export const puzzleTwo = (input) =>
  groupLines(input)
    .map(createPassport)
    .filter((passport) => passportValidator(REQUIRED_KEYS_TWO, passport))
    .length;
