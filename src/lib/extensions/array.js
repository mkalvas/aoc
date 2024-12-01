import { md5 } from '../functions/crypto';
import { gcd as _gcd, lcm as _lcm } from '../functions/stats';

Array.prototype.accumulate = function (
  fn = (total, elem) => (total ? total + elem : elem)
) {
  let total;
  let totals = [];
  for (let i = 0; i < this.length; i++) {
    total = fn(total, this[i]);
    totals[i] = total;
  }
  return totals;
};

Array.prototype.asc = function () {
  return this.sort((a, b) => a - b);
};

Array.prototype.clone = function () {
  // structuredClone doesn't walk the prototype chain,
  // so we need to copy it over
  const proto = this.__proto__;
  const copy = structuredClone(this);
  copy.__proto__ = proto;
  return copy;
};

Array.prototype.combinations = function () {
  return this.flatMap((v, i) => this.slice(i + 1).map((w) => [v, w]));
};

Array.prototype.cons = function (size = 2) {
  return Array.from({ length: this.length - size + 1 }, (_, i) =>
    this.slice(i, i + size)
  );
};

Array.prototype.count = function (v) {
  return this.filter((x) => x === v).length;
};

Array.prototype.counter = function () {
  let c = {};
  for (let v of this) {
    c[v] = (c[v] || 0) + 1;
  }
  return c;
};

Array.prototype.cut = function (i) {
  return [...this.slice(0, i), ...this.slice(i + 1)];
};

Array.prototype.desc = function () {
  return this.sort((a, b) => b - a);
};

Array.prototype.diffCount = function (b) {
  const larger = this.length >= b.length ? this.length : b.length;
  let count = 0;
  for (let i = 0; i < larger; i++) {
    if (i >= this.length || i >= b.length || this[i] !== b[i]) count++;
  }
  return count;
};

Array.prototype.diffs = function () {
  return this.reduce(
    (acc, x, i) => (i - 1 < 0 ? [] : [...acc, x - this[i - 1]]),
    []
  );
};

Array.prototype.eq = function (other) {
  return (
    Array.isArray(other) &&
    this.length === other.length &&
    this.every((v, i) => v === other[i])
  );
};

Array.prototype.gcd = function () {
  return this.reduce(_gcd);
};

Array.prototype.groupLines = function () {
  let groups = [];
  let current = [];
  for (let line of this) {
    if (line === '') {
      groups.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }
  groups.push(current);
  return groups;
};

Array.prototype.groupEvery = function (every) {
  const groups = [];
  for (let i = 0; i < this.length; i += every) {
    groups.push(this.slice(i, i + every));
  }
  return groups;
};

Array.prototype.id = function () {
  return md5(this.toString());
};

Array.prototype.lcm = function () {
  return this.reduce(_lcm);
};

Array.prototype.max = function () {
  return Math.max(...this);
};

Array.prototype.mean = function () {
  return this.sum() / this.length;
};

Array.prototype.median = function (sorted = false) {
  if (!sorted) this.asc();
  const mid = Math.floor(this.length / 2);
  if (this.length % 2) return (this[mid - 1] + this[mid]) / 2.0;
  return this[mid];
};

Array.prototype.min = function () {
  return Math.min(...this);
};

Array.prototype.nbrs = function (
  y,
  x,
  includeDiagonal = true,
  includeOrigin = true,
  includeOutOfBounds = false,
  outOfBoundsDefault = 0
) {
  let nbrs = [];
  for (const dr of [-1, 0, 1]) {
    for (const dc of [-1, 0, 1]) {
      const r = y + dr;
      const c = x + dc;
      const isDiagonal = Math.abs(dr) === Math.abs(dc) && dr !== 0 && dc !== 0;
      const isOrigin = dr === 0 && dc === 0;
      const isOob = r < 0 || c < 0 || r >= this.length || c >= this[y].length;
      if (
        (includeOutOfBounds || !isOob) &&
        (includeDiagonal || !isDiagonal) &&
        (includeOrigin || !isOrigin)
      ) {
        if (isOob) {
          nbrs.push([outOfBoundsDefault, r, c]);
        } else {
          nbrs.push([this[r][c], r, c]);
        }
      }
    }
  }
  return nbrs;
};

Array.prototype.nums = function () {
  return this.map(Number);
};

Array.prototype.product = function () {
  return this.reduce((p, n) => p * n, 1);
};

Array.prototype.repeat = function (times) {
  let out = [];
  for (let i = 0; i < times; i++) {
    out.push(this);
  }
  return out.flat();
};

Array.prototype.sum = function () {
  return this.reduce((s, n) => s + n, 0);
};

Array.prototype.takeEvery = function (every = 2, offset = 0) {
  return this.filter((_, i) => (i + offset) % every === 0);
};

Array.prototype.takeWhile = function (fn = (e) => !!e) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filtered.push(this[i]);
    } else {
      return filtered;
    }
  }
  return filtered;
};

Array.prototype.transpose = function () {
  return this[0].map((_, c) => this.map((r) => r[c]));
};

Array.prototype.truthy = function () {
  return this.filter(Boolean);
};

Array.prototype.zip = function (other) {
  return this.length >= other.length
    ? this.map((v, i) => [v, other[i]])
    : other.map((v, i) => [this[i], v]);
};
