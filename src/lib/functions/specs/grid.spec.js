import * as grid from '../grid';

describe('g2s', () => {
  it('prints the grid as a string', () => {
    expect(grid.g2s([[1], [2], [3]])).toBe('1\n2\n3');
  });
});

describe('gridSum', () => {
  it('sums a grid of numbers', () => {
    expect(grid.gridSum([[1], [2], [3]])).toBe(6);
  });
});

describe('dist', () => {
  it('gets the correct distance', () => {
    expect(grid.dist([0, 0], [0, 0])).toBe(0);
    expect(grid.dist([3, 0], [0, 0])).toBe(3);
    expect(grid.dist([0, 0], [0, 3])).toBe(3);
    expect(grid.dist([0, 0], [1, 1])).toBe(Math.sqrt(2));
    expect(grid.dist([0, 0, 0], [3, 0, 0])).toBe(3);
    expect(grid.dist([0, 0, 0], [0, 3, 0])).toBe(3);
    expect(grid.dist([0, 0, 0], [0, 0, 3])).toBe(3);
    expect(grid.dist([0, 0, 0], [3, 3, 3])).toBe(Math.sqrt(27));
  });

  it('gets the correct distance squared', () => {
    expect(grid.distSq([0, 0], [0, 0])).toBe(0);
    expect(grid.distSq([3, 0], [0, 0])).toBe(9);
    expect(grid.distSq([0, 0], [0, 3])).toBe(9);
    expect(grid.distSq([0, 0], [1, 1])).toBe(2);
    expect(grid.distSq([0, 0, 0], [3, 0, 0])).toBe(9);
    expect(grid.distSq([0, 0, 0], [0, 3, 0])).toBe(9);
    expect(grid.distSq([0, 0, 0], [0, 0, 3])).toBe(9);
    expect(grid.distSq([0, 0, 0], [3, 3, 3])).toBe(27);
  });

  it('gets the correct manhattan distance', () => {
    expect(grid.cityDist([0, 0], [0, 0])).toBe(0);
    expect(grid.cityDist([0, 0], [0, 1])).toBe(1);
    expect(grid.cityDist([0, 0], [1, 0])).toBe(1);
    expect(grid.cityDist([-1, 0], [1, 0])).toBe(2);
    expect(grid.cityDist([-1, -1], [1, 1])).toBe(4);
    expect(grid.cityDist([-1, -1, -1], [1, 1, 1])).toBe(6);
  });
});
