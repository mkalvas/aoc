import { parseInts } from '../../lib';

const initCups = (cupValues, cupCount) => {
  let cups = [];
  for (let i = 0; i < cupCount; i++) {
    i < cupValues.length
      ? (cups[i] = { v: cupValues[i], n: null })
      : (cups[i] = { v: i + 1, n: null });
  }

  cups.forEach((c, i) => (c.n = cups[(i + 1) % cups.length]));
  let map = new Map(cups.map((c) => [c.v, c]));
  return [cups[0], map];
};

const move = (head, map) => {
  const picks = [head.n.v, head.n.n.v, head.n.n.n.v];
  const pickHead = head.n;
  head.n = head.n.n.n.n;

  let val = head.v - 1;
  let insertHead = map.get(val);
  while (picks.includes(val) || !insertHead) {
    val--;
    if (val <= 0) val += map.size + 1;
    insertHead = map.get(val);
  }

  pickHead.n.n.n = insertHead.n;
  insertHead.n = pickHead;
  head = head.n;
  return [head, map];
};

const solution = (input, loops, cupCount) => {
  let [head, map] = initCups(parseInts(input[0].split('')), cupCount);
  for (let i = 0; i < loops; i++) {
    [head, map] = move(head, map);
  }
  return map.get(1);
};

export const solutionOne = (input, loops = 100) => {
  let list = solution(input, loops, 9).n;
  let string = '';
  for (let i = 0; i < 8; i++) {
    string += list.v;
    list = list.n;
  }
  return string;
};

export const solutionTwo = (input, loops = 10000000) => {
  const list = solution(input, loops, 1000000);
  return String(list.n.v * list.n.n.v);
};
