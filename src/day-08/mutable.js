const interpret = (instruction) => {
  const [op, arg] = instruction.split(' ');
  return [op, parseInt(arg)];
};

const operate = (instruction, acc, i) => {
  const [op, arg] = interpret(instruction);
  switch (op) {
    case 'acc':
      return [acc + arg, i + 1];
    case 'jmp':
      return [acc, i + arg];
    default:
      return [acc, i + 1];
  }
};

const execute = (instructions) => {
  let visited = [0];
  let acc = 0;

  while (true) {
    const index = visited[visited.length - 1];
    const [newAcc, nextIndex] = operate(instructions[index], acc, index);
    acc = newAcc;

    if (visited.includes(nextIndex)) return [1, acc];
    if (nextIndex === instructions.length) return [0, acc];
    visited.push(nextIndex);
  }
};

export const solutionOne = (instructions) => execute(instructions)[1];

export const solutionTwo = (instructions) => {
  for (const [index, instruction] of instructions.entries()) {
    const [oldOp, arg] = interpret(instruction);
    if (oldOp === 'acc') continue;

    const newOp = oldOp === 'jmp' ? 'nop' : 'jmp';
    const swappedInstruction = [newOp, arg].join(' ');
    const swappedInput = instructions.slice();
    swappedInput[index] = swappedInstruction;

    const [exitCode, acc] = execute(swappedInput);
    if (exitCode === 0) return acc;
  }
};
