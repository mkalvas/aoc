export const solutionOne = (input) =>
  (input[0].match(/\(/g) ?? []).length - (input[0].match(/\)/g) ?? []).length;

export const solutionTwo = (input) => {
  let floor = 0;
  const instructions = input[0].split('');
  for (const [index, instruction] of instructions.entries()) {
    instruction === '(' ? floor++ : floor--;
    if (floor < 0) return index + 1;
  }
  throw new Error('Santa never enters the basement');
};
