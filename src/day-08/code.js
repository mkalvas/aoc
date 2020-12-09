const ops = {
  acc: (state, additive) => ({
    ...state,
    acc: state.acc + parseInt(additive),
    loc: state.loc + 1,
    visited: [...state.visited, state.loc],
  }),
  jmp: (state, offset) => ({
    ...state,
    loc: state.loc + parseInt(offset),
    visited: [...state.visited, state.loc],
  }),
  nop: (state) => ({
    ...state,
    loc: state.loc + 1,
    visited: [...state.visited, state.loc],
  }),
};

const halt = (exit, state) => ({ ...state, exit });

const interpret = (instruction) => instruction.split(' ');

const execute = (instruction, state) => {
  const [op, ...args] = interpret(instruction);
  return ops[op](state, ...args);
};

const INITIAL_STATE = {
  acc: 0,
  loc: 0,
  visited: [],
  exit: null,
};

const run = (instructions) => {
  let state = INITIAL_STATE;
  while (true) {
    const newState = execute(instructions[state.loc], state);
    if (newState.visited.includes(newState.loc)) return halt(1, newState);
    if (newState.loc === instructions.length) return halt(0, newState);
    state = newState;
  }
};

export const solutionOne = (instructions) => run(instructions).acc;

export const solutionTwo = (instructions) => {
  for (let i = 0; i < instructions.length; i++) {
    const [op, ...args] = interpret(instructions[i]);
    if (op === 'acc') continue;

    const newOp = [op === 'jmp' ? 'nop' : 'jmp', ...args].join(' ');
    const newInstructions = [...instructions];
    newInstructions[i] = newOp;

    const { exit, acc } = run(newInstructions, INITIAL_STATE);
    if (exit === 0) return acc;
  }
};
