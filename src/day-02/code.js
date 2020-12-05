const validatorOne = ({ password, policy }) => {
  const regex = new RegExp(`${policy.pattern}`, 'g');
  const patternCount = (password.match(regex) || []).length;

  if (patternCount >= policy.min && patternCount <= policy.max) return true;
  return false;
};

const validatorTwo = ({ password, policy }) => {
  const matchOne = password.charAt(policy.min - 1) === policy.pattern;
  const matchTwo = password.charAt(policy.max - 1) === policy.pattern;

  if ((matchOne && !matchTwo) || (!matchOne && matchTwo)) return true;
  return false;
};

export const puzzle = (validator) => (input) =>
  input.reduce((list, record) => {
    if (validator(record)) return [...list, record];
    return list;
  }, []).length;

export const puzzleOne = puzzle(validatorOne);
export const puzzleTwo = puzzle(validatorTwo);
