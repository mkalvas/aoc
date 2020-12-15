const parseLine = (line) => line.split(/(?:\[|\]? = )/);

const sumMemory = (mem) => Object.values(mem).reduce((s, m) => s + m, 0n);

const mask = (bitmask, val) => {
  val |= BigInt(`0b${bitmask.replace(/X/g, '0')}`);
  return val & BigInt(`0b${bitmask.replace(/X/g, '1')}`);
};

const convertMask = (bitmask) => {
  let masks = [];
  for (const bit of bitmask.split('')) {
    switch (bit) {
      case '0':
        masks = masks.map((m) => m + 'X');
      case '1':
        masks = masks.map((m) => m + '1');
      case 'X':
      default:
        masks = [...masks.map((m) => m + '0'), ...masks.map((m) => m + '1')];
    }
  }
  return masks;
};

const run = (write, input) => {
  let mem = {};
  let bitmask = null;
  for (const line of input) {
    const [op, ...args] = parseLine(line);
    if (op === 'mask') {
      bitmask = args[0];
    } else {
      write(mem, bitmask, args[0], args[1]);
    }
  }
  return sumMemory(mem).toString();
};

const writeOne = (mem, bitmask, address, val) => {
  mem[address] = mask(bitmask, BigInt(val));
};

const writeTwo = (mem, bitmask, address, val) => {
  const addresses = convertMask(bitmask).map((m) => mask(m, BigInt(address)));
  for (const address of addresses) {
    mem[address] = BigInt(val);
  }
};

export const solutionOne = (input) => run(writeOne, input);
export const solutionTwo = (input) => run(writeTwo, input);
