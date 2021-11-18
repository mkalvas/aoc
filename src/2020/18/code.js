import { sum } from '../../lib';

const tokenize = (string) =>
  string
    .replace(/\s/g, '')
    .split(/([^\d])/g)
    .filter((c) => c !== '');

const findClose = (string) => {
  let balance = 0;
  let chars = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (chars[i] === ')') {
      if (balance === 0) return i;
      balance -= 1;
    } else if (chars[i] === '(') {
      balance += 1;
    }
  }
};

const parseExp = (exp) => {
  let op = '+';
  let total = 0;
  let tokens = tokenize(exp);

  while (tokens.length > 0) {
    const cur = tokens.shift();
    if (cur === '(') {
      const rest = tokens.join('');
      const end = findClose(rest);
      tokens = tokenize(rest.substr(end + 1));
      total = eval(`${total}${op}${parseExp(rest.substr(0, end + 1))}`);
    } else if (/[1-9]/.test(cur)) {
      total = eval(`${total}${op}${cur}`);
    } else if (cur === '+' || cur === '*') {
      op = cur;
    }
  }
  return total;
};

const reorder = (exp) => exp.replace(/\*/g, ')*(').concat(')+(');

export const solutionOne = (input) => sum(input.map(parseExp));

export const solutionTwo = (input) => eval(`(${input.map(reorder).join('')}0)`);
