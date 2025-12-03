# Other versions of 2025 day 03

## Forwards a bit slower because of the array copies and not much clearer

```js
const forwards = (input, batteries) =>
  input
    .map((b) => b.split('').nums())
    .map((bank) => {
      let joltage = '';
      let cursor = 0;

      for (let b = 0; b < batteries; b++) {
        const end = bank.length - batteries + b + 1;
        const options = bank.slice(cursor, end);

        let max = 0;
        for (let i = 0; i < options.length; i++) {
          if (options[i] > max) {
            max = options[i];
            cursor = i + 1;
          }
        }

        joltage += max;
      }

      return +joltage;
    })
    .sum();
```
