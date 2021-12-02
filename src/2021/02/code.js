const solution = (input) => {
  let pos = { horiz: 0, depth: 0, aim: 0 };
  const instructions = input.map((line) => line.split(' '));
  for (const [dir, str] of instructions) {
    const val = +str;
    if (dir === 'up') pos.aim -= val;
    if (dir === 'down') pos.aim += val;
    if (dir === 'forward') {
      pos.horiz += val;
      pos.depth += val * pos.aim;
    }
  }
  return [pos.horiz * pos.aim, pos.horiz * pos.depth];
};

export const solutionOne = (input) => solution(input)[0];
export const solutionTwo = (input) => solution(input)[1];
