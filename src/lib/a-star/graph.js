import { GridNode } from './grid-node';

export class Graph {
  constructor(gridIn, { diagonal = false, costFn, wallFn } = {}) {
    this.grid = [];
    this.nodes = [];
    this.dirtyNodes = [];
    this.diagonal = diagonal;
    this.grid = gridIn.map((row, y) =>
      row.map((weight, x) => {
        const node = new GridNode(x, y, weight, costFn, wallFn);
        this.nodes.push(node);
        return node;
      })
    );
  }

  toString() {
    return this.grid
      .map((row) => row.map((node) => String(node.weight.toFixed(2))).join(' '))
      .join('\n');
  }

  cleanDirty() {
    this.dirtyNodes.forEach((node) => node.clean());
    this.dirtyNodes = [];
  }

  markDirty(node) {
    this.dirtyNodes.push(node);
  }

  neighbors(node) {
    let neighbors;
    let { x, y } = node;
    if (this.diagonal) {
      neighbors = [
        ...neighbors,
        ...[
          [x + 1, y + 1],
          [x + 1, y - 1],
          [x - 1, y + 1],
          [x - 1, y - 1],
        ].filter(
          ([x, y]) =>
            y >= 0 && x >= 0 && y < this.grid.length && x < this.grid[y].length
        ),
      ];
    } else {
      neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ].filter(
        ([x, y]) =>
          y >= 0 && x >= 0 && y < this.grid.length && x < this.grid[y].length
      );
    }

    return neighbors.map(([x, y]) => this.grid[y][x]);
  }
}
