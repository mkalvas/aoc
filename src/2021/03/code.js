const getAnswer = (a, b) => parseInt(a, 2) * parseInt(b, 2);

const getBitFreqs = (lines, i) =>
  lines.reduce(
    (freq, curr) =>
      curr[i] === '1' ? [freq[0], freq[1] + 1] : [freq[0] + 1, freq[1]],
    [0, 0]
  );

const filterRatings = (list, pos, invert = false) =>
  list.filter((rating) => {
    const [zeros, ones] = getBitFreqs(list, pos);
    let char = ones >= zeros ? '1' : '0';
    if (invert) char = char === '1' ? '0' : '1';
    return rating[pos] === char;
  });

export const solutionOne = (input) =>
  getAnswer(
    ...input[0].split('').reduce(
      (rates, _, i) => {
        const [zeros, ones] = getBitFreqs(input, i);
        const [g, e] = ones > zeros ? ['1', '0'] : ['0', '1'];
        return [rates[0] + g, rates[1] + e];
      },
      ['', '']
    )
  );

export const solutionTwo = (input) => {
  let oxy = [...input];
  let co2 = [...input];
  for (let i = 0; i < input[0].length; i++) {
    if (oxy.length !== 1) oxy = filterRatings(oxy, i);
    if (co2.length !== 1) co2 = filterRatings(co2, i, true);
    if (oxy.length === 1 && co2.length === 1) return getAnswer(oxy[0], co2[0]);
  }
};
