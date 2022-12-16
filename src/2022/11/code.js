import { groupLines, nums } from '../../lib';

class Monkey {
  constructor(lines, relaxFn) {
    this.inspected = 0;
    this.items = nums(lines[1].split(': ')[1].split(', '));
    this.op = lines[2].split('= ')[1];
    this.divisor = +lines[3].split(' ').at(-1);
    this.bt = +lines[4].split(' ').at(-1);
    this.bf = +lines[5].split(' ').at(-1);
    this.relaxFn = relaxFn;
  }

  takeTurn = (monkeys) => {
    while (this.items.length) {
      this.inspected++;
      const item = this.items.shift();
      const worry = this.relaxFn(eval(this.op.replace(/old/g, item)));
      worry % this.divisor === 0
        ? monkeys[this.bt].items.push(worry)
        : monkeys[this.bf].items.push(worry);
    }
  };
}

const score = (monkeys) =>
  monkeys
    .sort((a, b) => a.inspected - b.inspected)
    .slice(-2)
    .map((m) => m.inspected)
    .product();

const play = (monkeys, rounds) => {
  for (let round = 0; round < rounds; round++)
    for (let m of monkeys) m.takeTurn(monkeys);
  return score(monkeys);
};

export const solutionOne = (input) => {
  const relax = (worry) => Math.floor(worry / 3);
  const monkeys = input.groupLines().map((g) => new Monkey(g, relax));
  return play(monkeys, 20);
};

export const solutionTwo = (input) => {
  const monkeys = input.groupLines().map((g) => new Monkey(g));
  const modulus = monkeys.map((m) => m.divisor).lcm();
  const relax = (worry) => worry % modulus;
  monkeys.forEach((m) => (m.relaxFn = relax));
  return play(monkeys, 10000);
};
