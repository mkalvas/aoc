import { sum } from '../../lib';

const parseRules = (lines) =>
  lines.reduce((rules, line) => {
    const [index, rawRule] = line.split(': ');
    const rule = rawRule.includes('"')
      ? rawRule
      : rawRule.split(' | ').map((opt) => opt.split(' '));

    return { ...rules, [index]: rule };
  }, {});

const parseInput = (input, extraLines = []) => {
  const blankLine = input.indexOf('');
  const messages = input.slice(blankLine + 1);
  const ruleLines = [...input.slice(0, blankLine), ...extraLines];
  const rules = parseRules(ruleLines);
  return [rules, messages];
};

const testMessage = (message, paths, rules) => {
  const isPathsEmpty = Array.isArray(paths) && paths.length === 0;
  if (message === '' || isPathsEmpty) return message === '' && isPathsEmpty;

  const rule = rules[paths[0]];
  if (rule.includes('"')) {
    if (rule.includes(message[0])) {
      return testMessage(message.slice(1), paths.slice(1), rules);
    } else {
      return false;
    }
  } else {
    return rule
      .map((r) => testMessage(message, [...r, ...paths.slice(1)], rules))
      .some(Boolean);
  }
};

const solution = (extraLines) => (input) => {
  const [rules, messages] = parseInput(input, extraLines);
  const results = messages.map((m) => testMessage(m, ['0'], rules));
  return sum(results.map((r) => (r ? 1 : 0)));
};

export const solutionOne = solution();

export const solutionTwo = solution(['8: 42 | 42 8', '11: 42 31 | 42 11 31']);
