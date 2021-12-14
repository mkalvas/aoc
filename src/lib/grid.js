// Two dimensional grid functions
export const g2s = (grid, padding = 0, padChar = ' ') =>
  grid
    .map((row) => row.map((c) => c.padStart(padding, padChar)).join(''))
    .join('\n');

export const flip = (grid) => grid.reverse();
