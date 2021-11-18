// const getTiles = (input) =>
//   input
//     .slice(0, -1) // trim final newline
//     .reduce(
//       (tiles, line) => {
//         const cur = tiles[tiles.length - 1];
//         if (line === '') {
//           tiles.push([]);
//         } else {
//           cur.push(line);
//         }
//         return tiles;
//       },
//       [[]]
//     )
//     .reduce(
//       (tiles, tile) => ({
//         ...tiles,
//         [tile[0].slice(5, -1)]: tile.slice(1),
//       }),
//       {}
//     );

export const solutionOne = (input) => {
  // const tiles = getTiles(input);
  // const usedTiles = new Set();
  // const puzzle = [[]];
  // for (tile in tiles) {
  //   const [head, ...lines] = tile;
  //   const tileNum = parseInt(head.slice(5, -1), 10);
  //   console.log(tileNum);
  // }
};

export const solutionTwo = (input) => {};
