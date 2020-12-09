const interpret = (instruction) => {
  const [op, arg] = instruction.split(' ');
  return [op, parseInt(arg)];
};

const operate = (instruction, state) => {
  const visitedState = { ...state, visited: [...state.visited, state.loc] };
  const [op, arg] = interpret(instruction);
  switch (op) {
    case 'acc':
      return { ...visitedState, acc: state.acc + arg, loc: state.loc + 1 };
    case 'jmp':
      return { ...visitedState, loc: state.loc + arg };
    case 'nop':
    default:
      return { ...visitedState, loc: state.loc + 1 };
  }
};

const execute = (instructions, state) => {
  if (state.exitCode !== null) return state;
  const newState = operate(instructions[state.loc], state);
  if (newState.visited.includes(newState.loc))
    return { ...newState, exitCode: 1 };
  if (newState.loc === instructions.length) return { ...newState, exitCode: 0 };
  return execute(instructions, newState);
};

const INITIAL_STATE = {
  acc: 0,
  loc: 0,
  visited: [],
  exitCode: null,
};

export const solutionOne = (instructions) =>
  execute(instructions, INITIAL_STATE).acc;

export const solutionTwo = (instructions) => {
  for (const [index, instruction] of instructions.entries()) {
    const [oldOp, arg] = interpret(instruction);
    if (oldOp === 'acc') continue;

    const newOp = oldOp === 'jmp' ? 'nop' : 'jmp';
    const swappedInstruction = [newOp, arg].join(' ');
    const swappedInput = instructions.slice();
    swappedInput[index] = swappedInstruction;

    const { exitCode, acc } = execute(swappedInput, INITIAL_STATE);
    if (exitCode === 0) return acc;
  }
};
