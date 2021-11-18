const buildBags = (rules) =>
  rules.reduce((bags, r) => {
    const [color, rest] = r.split(' bags contain ');
    const contains = rest.split(',').map((b) => ({
      number: Number(b.replace(/[^\d]/g, '')),
      color: b.replace(/(.*\d |[^a-zA-Z ]|bags|bag)/g, '').trim(),
    }));
    return { ...bags, [color]: contains };
  }, {});

const bagContains = (bags, bag, color) => {
  if (!bags[bag]) return 0;

  const innerColors = bags[bag].map((i) => i.color);
  if (innerColors.includes(color)) return 1;

  for (const inner of innerColors) {
    if (bagContains(bags, inner, color)) return 1;
  }

  return 0;
};

const bagsContaining = (bags, color) =>
  Object.keys(bags).reduce(
    (sum, bag) => sum + bagContains(bags, bag, color),
    0
  );

const bagCounts = (bags, color) =>
  (bags[color] || []).reduce(
    (count, inner) =>
      count + inner.number + inner.number * bagCounts(bags, inner.color),
    0
  );

const solution = (countFn) => (rules) =>
  countFn(buildBags(rules), 'shiny gold');

export const solutionOne = solution(bagsContaining);
export const solutionTwo = solution(bagCounts);
