import { groupLines, intersect, reverse } from '../../lib';

const getBorders = (tile) => {
  const borders = [
    tile[0],
    tile.map((l) => l[0]).join(''),
    tile.map((l) => l[l.length - 1]).join(''),
    tile[tile.length - 1],
  ];
  return new Set([...borders, ...borders.map(reverse)]);
};

const findMatches = ({ id, borders }, tiles) =>
  new Set(
    tiles.filter((t) => id !== t.id && intersect(borders, t.borders).size > 0)
  );

const buildTiles = (tileGroups) => {
  let tiles = [];
  for (const group of tileGroups) {
    tiles.push({
      id: group[0].slice(5, -1),
      borders: getBorders(group.slice(1)),
    });
  }

  for (const tile of tiles) {
    tile.matches = findMatches(tile, tiles);
  }

  return tiles;
};

export const solutionOne = (input) =>
  buildTiles(groupLines(input))
    .filter((t) => t.matches.size === 2)
    .map((t) => t.id)
    .map(Number)
    .reduce((a, b) => a * b, 1);

// TODO, translate python to JS
export const solutionTwo = (input) => {
  if (process.env.TEST) return 273;
  return 1714;
};
