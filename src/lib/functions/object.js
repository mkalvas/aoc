export const findKey = (o, v) => Object.keys(o).find((k) => o[k] === v);
export const vals = (o) => Object.values(o);
export const keys = (o) => Object.keys(o);
export const entries = (o) =>
  Array.isArray(o) ? [...o.entries()] : Object.entries(o);

// Floyd-Warshall distances from all points in graph to all others. Expects a
// graph like { id: [...nbrIds], ... } with each step to neighbor being 1 weight
export const fwDists = (graph) => {
  let dists = {};
  const nodes = keys(graph);
  for (let start of nodes) {
    dists[start] = {};
    for (let end of nodes) {
      dists[start][end] = graph[start].includes(end) ? 1 : Infinity;
    }
  }

  for (let k of nodes) {
    for (let i of nodes) {
      for (let j of nodes) {
        dists[i][j] = [dists[i][j], dists[i][k] + dists[k][j]].min();
      }
    }
  }

  return dists;
};
