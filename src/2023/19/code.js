import { groupLines, nums } from '../../lib';

const DEFAULT = [
  [
    [1, 4000],
    [1, 4000],
    [1, 4000],
    [1, 4000],
  ],
];

const parseParts = (ps) =>
  ps.map((p) => {
    const [x, m, a, s] = nums(p.replace(/[\{\}=xmas]/g, '').split(','));
    return { x, m, a, s, accepted: false };
    f;
  });

const parseWorkflows = (wfs) => {
  let workflows = {
    A: [{ expr: 'true', to: 'A', empty: true }],
    R: [{ expr: 'true', to: 'R', empty: true }],
  };
  wfs.map((wf) => {
    const [key, rest] = wf.split('{');
    const rules = rest
      .replace('}', '')
      .split(',')
      .map((d) => d.split(':'))
      .map(([expr, to]) => {
        if (!to) return { expr: 'true', to: expr, empty: true };
        return { expr, to, empty: false };
      });
    workflows[key] = rules;
  });
  return workflows;
};

const process = (part, cwf, wfs) => {
  const { x, m, a, s } = part; // used via eval
  for (let i = 0; i < wfs[cwf].length; i++) {
    const rule = wfs[cwf][i];
    if (eval(rule.expr)) {
      if (rule.to === 'A') return true;
      else if (rule.to === 'R') return false;
      else return process(part, rule.to, wfs);
    }
  }
};

const parseExpr = (expr) => [expr.includes('>'), expr[0], +expr.slice(2)];
const overlap = (c, gt, val, ranges) => {
  const ci = 'xmas'.indexOf(c);
  let nrs = [];
  for (let range of ranges) {
    let [min, max] = range[ci];
    if (gt) min = Math.max(min, val + 1);
    else max = Math.min(max, val - 1);
    if (min > max) continue;
    range[ci] = [min, max];
    nrs.push([range]);
  }
  return nrs;
};

const paths = (wf, wfs) => {
  const rule = wf[0];
  if (rule.empty && rule.to === 'R') return [];
  if (rule.empty && rule.to === 'A') return DEFAULT.clone();
  if (rule.empty) return paths(wfs[rule.to], wfs);

  const [gt, c, bound] = parseExpr(rule.expr);
  const inv = gt ? bound + 1 : bound - 1;
  const truePath = overlap(c, gt, bound, paths(wfs[rule.to], wfs));
  const falsePath = overlap(c, !gt, inv, paths(wf.slice(1), wfs));
  return [...truePath, ...falsePath].flat();
};

export const solutionOne = (input) => {
  const [wfs, ps] = groupLines(input);
  const workflows = parseWorkflows(wfs);
  let parts = parseParts(ps);
  parts.forEach((p) => (p.accepted = process(p, 'in', workflows)));
  return parts
    .filter((p) => p.accepted)
    .map((p) => p.x + p.m + p.a + p.s)
    .sum();
};

export const solutionTwo = (input) => {
  const workflows = parseWorkflows(groupLines(input)[0]);
  return paths(workflows['in'], workflows).reduce(
    (s, p) => s + [...p.map(([l, r]) => r - l + 1)].product(),
    0
  );
};
