export class GridNode {
  constructor(x, y, weight) {
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.x = x;
    this.y = y;
    this.closed = false;
    this.parent = null;
    this.visited = false;
    this.weight = weight;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  isWall() {
    return this.weight === 0;
  }

  getCost(fromNeighbor) {
    if (fromNeighbor && fromNeighbor.x != this.x && fromNeighbor.y != this.y) {
      return this.weight * 1.41421; // sqrt(2)
    }
    return this.weight;
  }

  clean() {
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.visited = false;
    this.closed = false;
    this.parent = null;
  }
}
