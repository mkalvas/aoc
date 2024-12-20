import { repeat } from '../../lib';

const expand = (diskmap) => {
  let expanded = [];
  let id = 0;
  for (let i = 0; i < diskmap.length; i++) {
    const c = diskmap[i];
    if (i % 2 === 0) {
      expanded.push(...repeat([id], +c));
      id++;
    } else {
      expanded.push(...repeat(['.'], +c));
    }
  }
  return expanded;
};

const compact = (expanded) => {
  let compacted = [];
  let front = 0;
  let back = expanded.length - 1;

  while (front <= back) {
    if (expanded[front] !== '.') {
      compacted.push(expanded[front]);
      front++;
    } else {
      if (expanded[back] !== '.') {
        compacted.push(expanded[back]);
        front++;
      }
      back--;
    }
  }
  return compacted;
};

const compactWhole = (expanded) => {
  let move = null;
  let slot = null;
  for (let i = expanded.length - 1; i >= 0; i--) {
    move = expanded[i];
    if (move[0] === '.') continue;
    for (let j = 0; j < i; j++) {
      slot = expanded[j];
      if (slot[0] === '.' && slot[1] >= move[1]) {
        expanded[j] = move;
        expanded[i] = ['.', move[1]];
        if (slot[1] > move[1]) {
          expanded = [
            ...expanded.slice(0, j + 1),
            ['.', slot[1] - move[1]],
            ...expanded.slice(j + 1),
          ];
        }
        break;
      }
    }
  }

  return expanded;
};

const checksum = (compacted) => {
  let sum = 0;
  for (let i = 0; i < compacted.length; i++) {
    sum += compacted[i] * i;
  }
  return sum;
};

export const solutionOne = (input) => checksum(compact(expand(input[0])));
export const solutionTwo = (input) => {
  let expanded = [];
  let id = 0;
  for (let i = 0; i < input[0].length; i++) {
    const c = input[0][i];
    if (i % 2 === 0) {
      expanded.push([id, +c]);
      id++;
    } else {
      expanded.push(['.', +c]);
    }
  }

  const compacted = compactWhole(expanded);

  let i = 0;
  let j = 0;
  let sum = 0;
  for (const c of compacted) {
    while (i < j + c[1]) {
      if (c[0] !== '.') sum += c[0] * i;
      i++;
    }
    j = i;
  }
  return sum;
};
