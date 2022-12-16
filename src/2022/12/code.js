import { entries, Graph, ord, search } from '../../lib';

function wallFn(fromNeighbor) {
  return this.weight - fromNeighbor.weight > 1;
}

const buildGraph = (input) => {
  let end;
  let starts = [];
  const grid = entries(input).map(([y, line]) =>
    entries(line.split('')).map(([x, c]) => {
      if (c === 'S') {
        starts.unshift([x, y]);
        return ord('a');
      } else if (c === 'E') {
        end = [x, y];
        return ord('z');
      } else {
        if (c === 'a') starts.push([x, y]);
        return ord(c);
      }
    })
  );

  const graph = new Graph(grid, { wallFn });
  return [graph, starts, end];
};

const getPaths = function* (input) {
  const [graph, starts, end] = buildGraph(input);
  for (let start of starts) {
    yield search(
      graph,
      graph.grid[start[1]][start[0]],
      graph.grid[end[1]][end[0]]
    ).length;
  }
};

export const solutionOne = (input) => getPaths(input).next().value;
export const solutionTwo = (input) => [...getPaths(input)].truthy().min();
