import { solutionOne, solutionTwo } from './code';

const INPUT_1 = [
  'broadcaster -> a, b, c',
  '%a -> b',
  '%b -> c',
  '%c -> inv',
  '&inv -> a',
];

const INPUT_2 = [
  'broadcaster -> a',
  '%a -> inv, con',
  '&inv -> b',
  '%b -> con',
  '&con -> output',
];

/**
button -low-> broadcaster
broadcaster -low-> a
a -high-> inv
a -high-> con
inv -low-> b
con -high-> output
b -high-> con
con -low-> output
 */

describe('puzzle one', () => {
  xit('multiplies the low pulses and the high pulses after 1000 button pushes', () => {
    expect(solutionOne(INPUT_1, 1)).toEqual(32);
    expect(solutionOne(INPUT_1)).toEqual(32000000);
    expect(solutionOne(INPUT_2)).toEqual(11687500);
    expect(solutionOne(INPUT_2, 1)).toEqual(16);
    expect(solutionOne(INPUT_2, 2)).toEqual(48);
    expect(solutionOne(INPUT_2, 3)).toEqual(117);
  });
});

describe('puzzle two', () => {
  xit('', () => {
    expect(solutionTwo(INPUT_1)).toEqual(undefined);
  });
});
