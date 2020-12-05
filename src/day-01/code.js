export const puzzleOne = (input) => {
  let i;
  let j;
  let set;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        set = [input[i], input[j]];
        break;
      }
    }
    if (set) break;
  }

  return {
    set,
    multiple: set.reduce((acc, cur) => acc * cur, 1),
  };
};

export const puzzleTwo = (input) => {
  let i;
  let j;
  let k;
  let set;

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[k] + input[i] + input[j] === 2020) {
          set = [input[i], input[j], input[k]];
          break;
        }
      }
      if (set) break;
    }
    if (set) break;
  }

  return {
    set,
    multiple: set.reduce((acc, cur) => acc * cur, 1),
  };
};
