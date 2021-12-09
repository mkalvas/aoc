import { GridNode } from './grid-node';

export class Graph {
  constructor(gridIn, { diagonal = false } = {}) {
    this.grid = [];
    this.nodes = [];
    this.dirtyNodes = [];
    this.diagonal = diagonal;
    this.grid = gridIn.map((row, x) =>
      row.map((weight, y) => {
        const node = new GridNode(x, y, weight);
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
    let { x, y } = node;
    let neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].filter(
      ([x, y]) =>
        x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[x].length
    );

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
            x >= 0 && y >= 0 && x < this.grid.length && y < this.grid[x].length
        ),
      ];
    }

    return neighbors.map(([x, y]) => this.grid[x][y]);
  }
}
