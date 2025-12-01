const solve = (input) => {
  let [dial, landed, passed] = [50, 0, 0];
  for (const line of input) {
    const [dir, dist] = [line[0] === 'R' ? 1 : -1, +line.slice(1)];
    for (let i = 1; i <= dist; i++) {
      dial = (dial + dir + 100) % 100;
      if (dial === 0) passed++;
    }
    if (dial === 0) landed++;
  }
  return [landed, passed];
};

export const solutionOne = (input) => solve(input)[0];
export const solutionTwo = (input) => solve(input)[1];
