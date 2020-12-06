export const buildRecords = (lines) => lines.map(createPasswordRecord);

const createPasswordRecord = (line) => {
  const parts = line.split(' ');
  const minMax = parts[0].split('-');

  return {
    password: parts[2],
    policy: {
      min: parseInt(minMax[0]),
      max: parseInt(minMax[1]),
      pattern: parts[1].slice(0, -1),
    },
  };
};

export const validatorOne = ({ password, policy }) => {
  const regex = new RegExp(policy.pattern, 'g');
  const patternCount = (password.match(regex) || []).length;

  if (patternCount >= policy.min && patternCount <= policy.max) return true;
  return false;
};

export const validatorTwo = ({ password, policy }) => {
  const matchOne = password.charAt(policy.min - 1) === policy.pattern;
  const matchTwo = password.charAt(policy.max - 1) === policy.pattern;

  if ((matchOne && !matchTwo) || (!matchOne && matchTwo)) return true;
  return false;
};

const solution = (validator) => (input) =>
  buildRecords(input).reduce((list, record) => {
    if (validator(record)) return [...list, record];
    return list;
  }, []).length;

export const solutionOne = solution(validatorOne);
export const solutionTwo = solution(validatorTwo);
