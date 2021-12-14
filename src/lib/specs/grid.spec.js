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
