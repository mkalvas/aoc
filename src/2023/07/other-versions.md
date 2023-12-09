# Other versions of 2023 day 07

## Just wanted to get it working so I typed all the rules out

```js
const VALS = { A: 14, K: 13, Q: 12, J: 11, T: 10 };

const rank = (cards) => {
  const counts = Object.values(counter(cards)).desc();
  const max = counts[0];
  const sets = counts.length;
  const cs = cards.length;
  if (max === 5) return 6; // five of a kind;
  if (max === 4) return 5; // four of a kind;
  if (max === 3 && sets === 2 && cs === 5) return 4; // full house;
  if (max === 3 && sets === 3 && cs === 5) return 3; // three of a kind;
  if (max === 3 && sets === 2 && cs === 4) return 3; // three of a kind;
  if (max === 3 && sets === 1 && cs === 3) return 3; // three of a kind;
  if (max === 2 && sets === 3 && cs === 5) return 2; // two pair;
  if (max === 2 && sets === 2 && cs === 4) return 2; // two pair;
  if (max === 2) return 1; // one pair;
  return 0; // high card;
};

const jokerRank = (cards) => {
  const others = cards.filter((c) => c !== 1);
  if (others.length === 5) return rank(cards);

  const jokers = cards.length - others.length;
  const otherRank = rank(others);
  if (otherRank === 5 || jokers === 5) return 6;
  if (otherRank === 3) return 4 + jokers;
  if (otherRank === 2) return 4;
  if (otherRank === 1 && jokers === 1) return 3;
  if (otherRank === 1 && jokers === 2) return 5;
  if (otherRank === 1 && jokers === 3) return 6;
  if (otherRank === 0 && jokers === 1) return 1;
  if (otherRank === 0 && jokers === 2) return 3;
  if (otherRank === 0 && jokers === 3) return 5;
  if (otherRank === 0 && jokers === 4) return 6;
};

const parseHand = (line, jokers) => {
  const [chars, bid] = line.split(' ');
  let cards = chars.split('').map((c) => VALS[c] ?? +c);
  if (jokers) {
    cards = cards.map((c) => (c === 11 ? 1 : c));
  }
  return { bid: +bid, cards, rank: jokers ? jokerRank(cards) : rank(cards) };
};
```
