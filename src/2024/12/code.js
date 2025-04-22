import { chars, gridEach, MH_DELTAS, nbrs, sk } from '../../lib';

const search = (grid, seen, r, c, plant) => {
  let region = [[r, c]];
  for (const [np, nr, nc] of nbrs(grid, r, c, false, false)) {
    const key = sk(plant, nr, nc);
    if (np === plant && !seen.has(key)) {
      seen.add(key);
      region.push(...search(grid, seen, nr, nc, plant));
    }
  }
  return region;
};

const perimeter = (region) => {
  let perim = 0;
  const seen = new Set();
  for (const [r, c] of region) {
    seen.add(sk(r, c));
    for (let [dr, dc] of MH_DELTAS) {
      const nr = dr + r;
      const nc = dc + c;
      const inside = region.some(([y, x]) => y === nr && x === nc);
      if (!seen.has(sk(nr, nc)) && !inside) perim++;
    }
  }
  return perim;
};

const isCorner = (c, l, r) => (!c && l === r) || (c && !l && !r);
const neighbors = (interior, r, c) => ({
  tl: interior.has(sk(r - 1, c - 1)),
  bl: interior.has(sk(r + 1, c - 1)),
  br: interior.has(sk(r + 1, c + 1)),
  tr: interior.has(sk(r - 1, c + 1)),
  l: interior.has(sk(r, c - 1)),
  r: interior.has(sk(r, c + 1)),
  t: interior.has(sk(r - 1, c)),
  b: interior.has(sk(r + 1, c)),
});

const sides = (region) => {
  let corners = 0;
  for (const [r, c] of region) {
    const n = neighbors(new Set(region.map((p) => sk(...p))), r, c);
    if (isCorner(n.tl, n.l, n.t)) corners++;
    if (isCorner(n.bl, n.b, n.l)) corners++;
    if (isCorner(n.tr, n.t, n.r)) corners++;
    if (isCorner(n.br, n.r, n.b)) corners++;
  }
  return corners;
};

export const solve = (input, priceFn) => {
  let regions = [];
  const seen = new Set();
  const grid = input.map(chars);
  gridEach(grid, (plant, r, c) => {
    const key = sk(plant, r, c);
    if (seen.has(key)) return;
    seen.add(key);
    regions.push(search(grid, seen, r, c, plant));
  });

  let price = 0;
  for (const region of regions) {
    const a = region.length;
    const p = priceFn(region);
    price += a * p;
  }
  return price;
};

export const solutionOne = (input) => solve(input, perimeter);
export const solutionTwo = (input) => solve(input, sides);
