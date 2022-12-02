# Other versions

## JS hard-coded map.

As fast as can be but feels a bit "cheaty". I wanted to code a logic based solution anyway.

```js
const MAP = {
  'A X': [4, 3],
  'A Y': [8, 4],
  'A Z': [3, 8],
  'B X': [1, 1],
  'B Y': [5, 5],
  'B Z': [9, 9],
  'C X': [7, 2],
  'C Y': [2, 6],
  'C Z': [6, 7],
};

export const solutionOne = (input) => sum(input.map((l) => MAP[l][0]));
export const solutionTwo = (input) => sum(input.map((l) => MAP[l][1]));
```
