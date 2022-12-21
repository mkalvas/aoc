import { entries, fwDists, keys, vals } from '../../lib';

const parse = (acc, line) => {
  const flow = +line.match(/\d+/g)[0];
  const [id, ...nbrs] = line.match(/([A-Z][A-Z])/g);
  if (flow !== 0) acc.flows[id] = +line.match(/\d+/g)[0];
  acc.graph[id] = nbrs;
  return acc;
};

const paths = (input, ...walkArgs) => {
  const { flows, graph } = input.reduce(parse, { flows: {}, graph: {} });
  const valves = keys(flows).reduce((vs, v, i) => ({ ...vs, [v]: 1 << i }), {});
  const dists = fwDists(graph);

  const walk = (pos, time, state, flow, answer) => {
    answer[state] = Math.max(answer?.[state] ?? 0, flow);
    for (const [nid, valve] of entries(valves)) {
      const newTime = time - dists[pos][nid] - 1;
      if (valve & state || newTime <= 0) continue;
      walk(nid, newTime, state | valve, flow + newTime * flows[nid], answer);
    }
    return answer;
  };

  return walk(...walkArgs);
};

export const solutionOne = (input) =>
  vals(paths(input, 'AA', 30, 0, 0, {})).max();

export const solutionTwo = (input) => {
  const opts = entries(paths(input, 'AA', 26, 0, 0, {}));
  let best = 0;
  for (let [k1, v1] of opts) {
    for (let [k2, v2] of opts) {
      if (!(+k1 & +k2)) best = Math.max(best, v1 + v2);
    }
  }

  return best;
};
