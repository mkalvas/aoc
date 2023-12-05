import { groupLines } from '../../lib';

const parseMaps = (groups) => {
  let maps = {};
  for (let group of groups.slice(1)) {
    let [from, _, to] = group[0].split(/(-to-| map:)/g);
    let ranges = [];
    for (let rs of group.slice(1)) {
      let [t, f, l] = rs.split(' ').nums();
      ranges.push({ t, f, l });
    }
    maps[from] = { to, ranges };
  }

  return maps;
};

const solve = (groups, seeds) => {
  let current = 'seed';
  const maps = parseMaps(groups);
  while (current !== 'location') {
    let next = [];
    let map = maps[current];

    for (let [sStart, sEnd] of seeds) {
      let passthrough = true;
      for (const { t, f: rStart, l } of map.ranges) {
        const rDelta = t - rStart;
        const rEnd = rStart + l - 1;
        if (
          rStart <= sStart &&
          sStart <= rEnd &&
          rStart <= sEnd &&
          sEnd <= rEnd
        ) {
          next.push([sStart + rDelta, sEnd + rDelta]);
          passthrough = false;
        } else if (rStart <= sStart && sStart <= rEnd) {
          next.push([sStart + rDelta, rEnd + rDelta]);
          seeds.push([rEnd + 1, sEnd]);
          passthrough = false;
        } else if (rStart <= sEnd && sEnd <= rEnd) {
          seeds.push([sStart, rStart - 1]);
          next.push([rStart + rDelta, sEnd + rDelta]);
          passthrough = false;
        } else if (sStart < rStart && sEnd > rEnd) {
          seeds.push([rEnd + 1, sEnd]);
          seeds.push([sStart, rStart - 1]);
          next.push([rStart + rDelta, rEnd + rDelta]);
          passthrough = false;
        }
        if (!passthrough) break;
      }
      if (passthrough) next.push([sStart, sEnd]);
    }

    seeds = next;
    current = map.to;
  }

  return seeds.map((r) => r.min()).min();
};

export const solutionOne = (input) => {
  const groups = groupLines(input);
  let seeds = groups[0][0]
    .split(': ')[1]
    .split(' ')
    .nums()
    .map((s) => [s, s]);
  return solve(groups, seeds);
};

export const solutionTwo = (input) => {
  const groups = groupLines(input);
  let seeds = input[0]
    .split(': ')[1]
    .split(' ')
    .nums()
    .groupEvery(2)
    .map((r) => [r[0], r[0] + r[1] - 1]);
  return solve(groups, seeds);
};
