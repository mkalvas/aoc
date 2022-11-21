const { floor, ceil, random } = Math;

const INNER = /^\[(.+)\]$/;
const TOKENS = /(\[|\d+|,|\])/g;

export class Snail {
  constructor(left, right, parent) {
    this.id = floor(random() * 100000);
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  toString = () => `[${this.left},${this.right}]`;
  static from = (s) => {
    const tree = new Snail();
    let ptr = tree;
    for (const group of s.match(INNER)[1].matchAll(TOKENS)) {
      const token = group[0];
      if (token === '[') {
        const node = new Snail();
        node.parent = ptr;
        ptr.insert(node);
        ptr = node;
      } else if (token === ']') {
        ptr = ptr.parent;
      } else if (/\d+/.test(token)) {
        ptr.insert(+token);
      }
    }
    return tree;
  };

  nums = () => [typeof this.left === 'number', typeof this.right === 'number'];

  add = (sn) => {
    const tree = new Snail(this, sn);
    this.parent = tree;
    sn.parent = tree;
    return tree;
  };

  mag = () => {
    const [ln, rn] = this.nums();
    const l = ln ? this.left : this.left.mag();
    const r = rn ? this.right : this.right.mag();
    return l * 3 + r * 2;
  };

  insert = (x) => {
    if (this.left == null) {
      this.left = x;
    } else {
      this.right = x;
    }
  };

  split = () => {
    let done = false;
    const [ln, rn] = this.nums();
    if (ln && this.left >= 10) {
      this.left = new Snail(floor(this.left / 2), ceil(this.left / 2), this);
      return true;
    }

    if (!ln && !done) done = this.left.split();

    if (!done && rn && this.right >= 10) {
      this.right = new Snail(floor(this.right / 2), ceil(this.right / 2), this);
      return true;
    }

    if (!rn && !done) done = this.right.split();
    return done;
  };

  explode = (depth = 0, side) => {
    const [ln, rn] = this.nums();
    if (ln && rn && depth >= 4) {
      if (this.parent == null) return false;
      this.parent.addl(this.left, new Set([this.id]));
      this.parent.addr(this.right, new Set([this.id]));
      this.parent[side] = 0;
      return true;
    } else {
      let done = false;
      if (!ln && !done) done = this.left.explode(depth + 1, 'left');
      if (!rn && !done) done = this.right.explode(depth + 1, 'right');
      return done;
    }
  };

  simplify = () => {
    if (this.explode()) this.simplify();
    if (this.split()) this.simplify();
    return this;
  };

  addl = (n, seen) => {
    const [ln, rn] = this.nums();
    const ls = !ln && seen.has(this.left.id);
    const rs = !rn && seen.has(this.right.id);
    if (ls) {
      if (this.parent == null) return;
      this.parent.addl(n, seen.add(this.id));
    } else if (!ls && rn) {
      this.right += n;
    } else if (!ls && !rn && !rs) {
      this.right.addl(n, seen.add(this.id));
    } else if (!ls && !rn && rs && ln) {
      this.left += n;
    } else if (!ls && !rn && rs && !ln) {
      this.left.addl(n, seen.add(this.id));
    }
  };

  addr = (n, seen) => {
    const [ln, rn] = this.nums();
    const ls = !ln && seen.has(this.left.id);
    const rs = !rn && seen.has(this.right.id);
    if (rs) {
      if (this.parent == null) return;
      this.parent.addr(n, seen.add(this.id));
    } else if (!rs && ln) {
      this.left += n;
    } else if (!rs && !ln && !ls) {
      this.left.addr(n, seen.add(this.id));
    } else if (!rs && !ln && ls && rn) {
      this.right += n;
    } else if (!rs && !ln && ls && !rn) {
      this.right.addr(n, seen.add(this.id));
    }
  };
}

export const sum = (lines) =>
  lines
    .map(Snail.from)
    .reduce((sum, sn) => {
      if (sum === null) return sn.simplify();
      return sum.add(sn).simplify();
    }, null)
    .simplify();

export const solutionOne = (input) => sum(input).mag();
export const solutionTwo = (input) => {
  let max = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i === j) continue;
      const x = sum([input[i], input[j]]).mag();
      max = max >= x ? max : x;
      const y = sum([input[j], input[i]]).mag();
      max = max >= y ? max : y;
    }
  }
  return max;
};
