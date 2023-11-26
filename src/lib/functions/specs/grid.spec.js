import * as grid from '../grid';

describe('g2s', () => {
  it('prints the grid as a string', () => {
    expect(grid.g2s([[1], [2], [3]])).toBe('1\n2\n3');
  });
});

describe('gridMap', () => {
  it('maps a function to a 2d grid', () => {
    const ex = [
      [1, 2],
      [3, 4],
    ];
    expect(grid.gridMap(ex, (v, r, c) => [v ** 2, [c, r]])).toEqual([
      [
        [1, [0, 0]],
        [4, [1, 0]],
      ],
      [
        [9, [0, 1]],
        [16, [1, 1]],
      ],
    ]);
  });
});

describe('gridEach', () => {
  it('performs a function for each element in a 2d grid', () => {
    let ex = [
      [1, 2],
      [3, 4],
    ];
    grid.gridEach(ex, (v, r, c) => (ex[r][c] = [v ** 2, [c, r]]));
    expect(ex).toEqual([
      [
        [1, [0, 0]],
        [4, [1, 0]],
      ],
      [
        [9, [0, 1]],
        [16, [1, 1]],
      ],
    ]);
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
