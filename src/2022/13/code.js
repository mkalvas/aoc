import { clone, exists, groupLines, isArr, product, sum } from '../../lib';

const isOrdered = (left, right) => {
  if (left.length === 0 && right.length !== 0) return true;
  if (left.length !== 0 && right.length === 0) return false;
  if (left.length === 0 && right.length === 0) return null;

  let [l, r] = [left.shift(), right.shift()];
  if (isArr(l) || isArr(r)) {
    if (!isArr(r)) r = [r];
    if (!isArr(l)) l = [l];
    return isOrdered(l, r) ?? isOrdered(left, right);
  } else {
    if (l > r) return false;
    if (l < r) return true;
    return isOrdered(left, right);
  }
};

export const solutionOne = (input) =>
  sum(
    groupLines(input)
      .map((g) => g.map(eval))
      .map((p, i) => (isOrdered(...p) ? i + 1 : 0))
  );

export const solutionTwo = (input) => {
  const trimmed = [...input].filter(Boolean).map(eval);
  return product([
    exists(clone(trimmed).map((l) => isOrdered(l, [[2]]))).length + 1,
    exists(clone(trimmed).map((l) => isOrdered(l, [[6]]))).length + 2,
  ]);
};
