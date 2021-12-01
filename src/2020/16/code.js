import { groupLines, nums, sum } from '../../lib';

const parseTicket = (ticketLine) => nums(ticketLine.split(','));

const parseRules = (lines) =>
  lines.reduce((rules, def) => {
    const [name, values] = def.split(': ');
    const [r1Min, r1Max, r2Min, r2Max] = nums(values.split(/(?: or |-)/g));
    return {
      ...rules,
      [name]: [
        { min: r1Min, max: r1Max },
        { min: r2Min, max: r2Max },
      ],
    };
  }, {});

const parseInput = (input) => {
  const [ruleLines, myLine, nearbyLines] = groupLines(input);
  return {
    rules: parseRules(ruleLines),
    myTicket: parseTicket(myLine[1]),
    nearby: nearbyLines.slice(1).map(parseTicket),
  };
};

const checkRange = (val, min, max) => min <= val && val <= max;

const applyRules = (val, ruleDefs) => {
  for (const rule of Object.values(ruleDefs).flat()) {
    if (checkRange(val, rule.min, rule.max)) return 0;
  }
  return val;
};

const getErrorRate = (ticket, ruleDefs) => {
  for (const field of ticket) {
    const errorRate = applyRules(field, ruleDefs);
    if (errorRate > 0) return errorRate;
  }
  return 0;
};

export const solutionOne = (input) => {
  const { rules, nearby } = parseInput(input);
  return nearby.reduce((sum, t) => sum + getErrorRate(t, rules), 0);
};

const validateRulesAgainstFields = (tickets, rules) =>
  tickets[0].reduce((possible, _, field) => {
    const fieldValues = tickets.map((t) => t[field]);
    for (const [name, def] of Object.entries(rules)) {
      const errors = sum(fieldValues.map((v) => applyRules(v, def)));
      if (errors === 0) possible[name] = [...(possible[name] || []), field];
    }
    return possible;
  }, {});

const findConstrainedField = (constraints, known) => {
  const [key, fields] = Object.entries(constraints).find(
    ([, c]) =>
      c.reduce((a, f) => (!known.has(f) ? [...a, f] : a), []).length === 1
  );
  return [key, fields.filter((f) => !known.has(f))[0]];
};

const mapConstraints = (tickets, constraints) => {
  let known = new Set();
  return tickets[0].reduce((map) => {
    const [key, field] = findConstrainedField(constraints, known);
    known.add(field);
    return { ...map, [key]: field };
  }, {});
};

export const solutionTwo = (input) => {
  const { rules, myTicket, nearby } = parseInput(input);
  const tickets = nearby.filter((t) => getErrorRate(t, rules) === 0);
  const possibleValidRules = validateRulesAgainstFields(tickets, rules);
  const mapping = mapConstraints(tickets, possibleValidRules);
  return Object.entries(mapping).reduce(
    (m, [r, i]) => (r.match('departure') ? m * myTicket[i] : m),
    1
  );
};
