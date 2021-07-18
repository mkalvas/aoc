import { sum } from '../lib';

// Attempt 1: Missing something, the set is right but there's a join/flat needed
// somewhere in order to get it right that I couldn't figure out. This would be
// a great one to get working somehow. Super small and readable.
// This one might be doable by just converting to (a|b) type regex groups
// export const parseRule = (rule) => {
//   const parts = rule.split(': ');
//   const paths = parts[1].split(' | ').map((o) => o.split(' '));
//   return [parts[0], paths];
// };

// export const buildRule = (rules, ruleNumber) => {
//   const rule = rules.find((r) => r.startsWith(`${ruleNumber}:`));
//   const paths = parseRule(rule);

//   return paths.map((tokenSet) =>
//     tokenSet
//       .map((token) => {
//         if (token === 'a' || token === 'b') return token;
//         return buildRule(rules, token);
//       })
//       .join('')
//   );
// };

// Attempt 2: Generator madness...
// function* runPath(g, path, m) {
//   if (!path || (Array.isArray(path) && path.length === 0)) {
//     yield m;
//   } else {
//     const [r, ...rest] = path;
//     for (const s of run(g, r, m)) {
//       yield* runPath(g, rest, s);
//     }
//   }
// }

// function* runPaths(g, paths, m) {
//   for (const path of paths) {
//     yield* runPath(g, path, m);
//   }
// }

// function* run(g, r, m) {
//   // multiple alternative paths in grammar (g) for rule (r)
//   if (Array.isArray(g[r])) {
//     yield* runPaths(g, g[r], m);
//   }
//   // terminal character rule
//   if (m && m[0] === g[r]) {
//     yield m.slice(1);
//   }
// }

// const testMessage = (g, m) => {
//   for (const result of run(g, '0', m)) {
//     console.log(result);
//     if (result === '') return 1;
//   }
//   return 0;
// };

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
