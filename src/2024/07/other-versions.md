# Other versions of 2024 day 7

## Loops

```js
const parse = (input) =>
  input.map((l) => {
    const [result, rest] = l.split(': ');
    return [+result, rest.split(' ')];
  });

export const solutionOne = (input) => {
  const equations = parse(input);
  let possible = [];
  for (const [answer, numbers] of equations) {
    const opts = cartesian(...[['*', '+']].repeat(numbers.length - 1));
    for (const seq of opts) {
      let sval = numbers[0];
      for (let i = 0; i < seq.length; i++) {
        sval = eval(`${sval} ${seq[i]} ${numbers[i + 1]}`);
      }
      if (answer === sval) {
        possible.push(answer);
        break;
      }
    }
  }
  return possible.sum();
};

export const solutionTwo = (input) => {
  const equations = parse(input);
  let possible = [];
  for (const [answer, numbers] of equations) {
    const opts = cartesian(...[['*', '+', '|']].repeat(numbers.length - 1));
    for (let seq of opts) {
      let sval = numbers[0];
      for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '|') {
          sval = +`${sval}${numbers[i + 1]}`;
        } else {
          sval = eval(`${sval} ${seq[i]} ${numbers[i + 1]}`);
        }
      }
      if (answer === eval(sval)) {
        possible.push(answer);
        break;
      }
    }
  }
  return possible.sum();
};
```
