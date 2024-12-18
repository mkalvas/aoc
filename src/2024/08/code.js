import { chars, vals, p2s } from '../../lib';

const NODE = /[a-zA-Z0-9]/;

const parseNodes = (input) => {
  let nodes = {};
  for (const [y, l] of input.entries()) {
    for (const [x, c] of chars(l).entries()) {
      if (NODE.test(c)) {
        if (nodes[c]) nodes[c].push([x, y]);
        else nodes[c] = [[x, y]];
      }
    }
  }
  return vals(nodes);
};

const extrapolate = (height, width, limit) => (a, b, antinodes) => {
  const rise = b[1] - a[1];
  const run = b[0] - a[0];
  let nx = b[0];
  let ny = b[1];

  let i = 0;
  while (i < limit) {
    nx += run;
    ny += rise;
    if (0 <= nx && nx < width && 0 <= ny && ny < height) {
      antinodes.add(p2s([nx, ny]));
      i++;
    } else {
      return antinodes;
    }
  }
  return antinodes;
};

const findAntinodes = (input, limit, includeNodes = false) => {
  const locations = vals(parseNodes(input));
  let antinodes = includeNodes
    ? new Set(locations.map((n) => n.map(p2s)).flat())
    : new Set();

  const ex = extrapolate(input.length, input[0].length, limit);
  for (const ls of locations) {
    for (const [a, b] of ls.combinations()) {
      antinodes = ex(a, b, antinodes);
      antinodes = ex(b, a, antinodes);
    }
  }
  return antinodes;
};

export const solutionOne = (input) => findAntinodes(input, 1).size;
export const solutionTwo = (input) => findAntinodes(input, Infinity, true).size;
