const buildNeighbors = (input) => {
  let nbrs = {};
  for (const line of input) {
    const [a, b] = line.split('-');
    nbrs[a] = [...(nbrs[a] || []), b];
    nbrs[b] = [...(nbrs[b] || []), a];
  }
  return nbrs;
};

const search = (nbrs, allowedVisits, seen = new Set(), cave = 'start') => {
  if (cave === 'end') return 1;
  if (seen.has(cave)) {
    if (cave === 'start') return 0;
    if (cave.toLowerCase() === cave) {
      if (allowedVisits === 1) return 0;
      else allowedVisits = 1;
    }
  }
  return nbrs[cave].reduce(
    (sum, n) => sum + search(nbrs, part, new Set([...seen, cave]), n),
    0
  );
};

export const solutionOne = (input) => search(buildNeighbors(input), 1);
export const solutionTwo = (input) => search(buildNeighbors(input), 2);
