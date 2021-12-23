import { b2d, d2b, h2d, sum, product } from '../../lib';

const VALUE = 4;
const OP_LEN_ID = '0';
const OP_LEN = 15;
const OP_SUB = 11;

const diffNear4x = (s) => Math.ceil(s.length / 4) * 4 - s.length;
const bin = (hexString) => {
  const bin = hexString
    .split('')
    .reduce((s, c) => s + d2b(h2d(c)).padStart(4, '0'), '');
  return '0'.repeat(diffNear4x(bin)) + bin;
};

const read = (stream, lim) => {
  let ps = [];
  while (stream.length) {
    ps.push(readPacket(stream));
    if ((lim && ps.length >= lim) || b2d(stream.join('')) === 0) return ps;
  }
  return ps;
};

const readPacket = (stream) => {
  const packet = {
    v: b2d(stream.splice(0, 3).join('')),
    tid: b2d(stream.splice(0, 3).join('')),
  };

  if (packet.tid === VALUE) return { ...packet, value: readValue(stream) };

  const ltid = stream.splice(0, 1)[0];
  const len = ltid === OP_LEN_ID ? OP_LEN : OP_SUB;
  const quantity = b2d(stream.splice(0, len).join(''));
  const sub =
    ltid === OP_LEN_ID
      ? read(stream.splice(0, quantity))
      : read(stream, quantity);

  return { ...packet, sub };
};

const readValue = (stream) => {
  let value = '';
  while (stream.length) {
    const [type, ...val] = stream.splice(0, 5);
    value += val.join('');
    if (type === '0') return b2d(value);
  }
};

const sumVs = (ps) => sum(ps.map(({ sub, v }) => (sub ? sumVs(sub) + v : v)));

const evalp = ({ sub, tid, value }) => {
  switch (tid) {
    case 0: return sum(sub.map((p) => evalp(p)));
    case 1: return product(sub.map((p) => evalp(p)));
    case 2: return Math.min(...sub.map((p) => evalp(p)));
    case 3: return Math.max(...sub.map((p) => evalp(p)));
    case 4: return value;
    case 5: return evalp(sub[0]) > evalp(sub[1]) ? 1 : 0;
    case 6: return evalp(sub[0]) < evalp(sub[1]) ? 1 : 0;
    case 7: return evalp(sub[0]) === evalp(sub[1]) ? 1 : 0;
    default: throw new Error('Invalid packet type');
  }
};

export const solutionOne = (input) => sumVs(read(bin(input[0]).split('')));
export const solutionTwo = (input) => evalp(read(bin(input[0]).split(''))[0]);
