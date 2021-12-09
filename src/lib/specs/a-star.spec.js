import { Graph } from '../a-star/graph';
import { search } from '../a-star/a-star';

const WEIGHTS = [
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const WEIGHTS_VARIABLE = [
  [1, 1, 1],
  [1, 30, 1],
  [1, 1, 1],
];

describe('A*', () => {
  describe('when diagonal paths are not allowed', () => {
    const graph = new Graph(WEIGHTS, { diagonal: false });

    it('fails at finding a path when the end point is a wall', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[1][1]);
      expect(result.join(', ')).toBe('');
    });

    it('fails at finding a path when it is blocked', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[2][2]);
      expect(result.join(', ')).toBe('');
    });

    it('finds a path that can be reached by manhattan travel', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[4][4]);
      expect(result.join(', ')).toBe(
        '[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]'
      );
    });

    it('fails to find a path that can be reached only by diagonal travel', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[1][4]);
      expect(result.join(', ')).toBe('');
    });

    describe('with a strongly weighted graph', () => {
      const graph = new Graph(WEIGHTS_VARIABLE, { diagonal: false });
      it('finds a path avoiding the high weight', () => {
        const result = search(graph, graph.grid[0][0], graph.grid[2][2]);
        expect(result.join(', ')).toBe('[1, 0], [2, 0], [2, 1], [2, 2]');
      });
    });

    describe('with closest path option', () => {
      it('returns the closest node to the unreachable node', () => {
        const result = search(graph, graph.grid[0][0], graph.grid[2][4], {
          heuristic: 'manhattan',
          closest: true,
        });
        expect(result.join(', ')).toBe(
          '[1, 0], [2, 0], [3, 0], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]'
        );
      });
    });
  });

  describe('when diagonal paths are allowed', () => {
    const graph = new Graph(WEIGHTS, { diagonal: true });

    it('fails at finding a path when the end point is a wall', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[1][1], {
        heuristic: 'diagonal',
      });
      expect(result.join(', ')).toBe('');
    });

    it('fails at finding a path when it is blocked', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[2][2], {
        heuristic: 'diagonal',
      });
      expect(result.join(', ')).toBe('');
    });

    it('finds a path that can be reached by manhattan travel', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[4][4], {
        heuristic: 'diagonal',
      });
      expect(result.join(', ')).toBe(
        '[1, 0], [2, 0], [3, 0], [4, 1], [4, 2], [4, 3], [4, 4]'
      );
    });

    it('finds a path that can be reached only by diagonal travel', () => {
      const result = search(graph, graph.grid[0][0], graph.grid[1][4], {
        heuristic: 'diagonal',
      });
      expect(result.join(', ')).toBe('[0, 1], [0, 2], [0, 3], [1, 4]');
    });

    describe('with a strongly weighted graph', () => {
      const graph = new Graph(WEIGHTS_VARIABLE, { diagonal: true });
      it('finds a path avoiding the high weight', () => {
        const result = search(graph, graph.grid[0][0], graph.grid[2][2]);
        expect(result.join(', ')).toBe('[1, 0], [2, 1], [2, 2]');
      });
    });

    describe('with closest path option', () => {
      it('returns the closest node to the unreachable node', () => {
        const result = search(graph, graph.grid[0][0], graph.grid[2][4], {
          heuristic: 'diagonal',
          closest: true,
        });
        expect(result.join(', ')).toBe('[0, 1], [0, 2], [0, 3], [1, 4]');
      });
    });
  });
});
