import { numericSort, parseInts } from '../lib';

export const parseInput = (input) => {
  const adapters = parseInts(input).sort(numericSort);
  return [0, ...adapters, adapters[adapters.length - 1] + 3];
};

const countSteps = (sortedAdapters) =>
  sortedAdapters.reduce(
    (counter, adapter, i) => {
      const stepType = sortedAdapters[i + 1] - adapter;
      return { ...counter, [stepType]: counter[stepType] + 1 };
    },
    { 1: 0, 3: 0 }
  );

const countPaths = (adapters) =>
  adapters.reduceRight((paths, adapter, i) => {
    if (i === adapters.length - 1) return { [adapter]: 1 };
    return {
      ...paths,
      [adapter]: [1, 2, 3]
        .map((delta) => paths[adapter + delta] ?? 0)
        .reduce((sum, n) => sum + n),
    };
  }, {});

export const solutionOne = (input) => {
  const metadata = countSteps(parseInput(input));
  return metadata['1'] * metadata['3'];
};

export const solutionTwo = (input) => countPaths(parseInput(input))[0];
