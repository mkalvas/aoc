import { arrayEquals, groupLines, parseInts } from '../../lib';

const parsePlayerDecks = (input) =>
  groupLines(input).map((player) => parseInts(player.slice(1)));

const score = (deck) =>
  deck.reduce((score, card, i) => score + card * (deck.length - i), 0);

const combat = ([p1, p2]) => {
  while (p1.length && p2.length) {
    const p1Card = p1.shift();
    const p2Card = p2.shift();
    p1Card > p2Card ? p1.push(p1Card, p2Card) : p2.push(p2Card, p1Card);
  }
  return [p1.length ? 1 : 2, p1.length ? p1 : p2];
};

const gameInStack = (stack, [p1, p2]) => {
  for (const [s1, s2] of stack) {
    if (arrayEquals(s1, p1) && arrayEquals(s2, p2)) return true;
  }
  return false;
};

const recursiveCombat = ([p1, p2]) => {
  let gameStack = [];

  while (p1.length && p2.length) {
    if (gameInStack(gameStack, [p1, p2])) return [1, p1];
    gameStack.push([[...p1], [...p2]]);

    const p1Card = p1.shift();
    const p2Card = p2.shift();

    if (p1Card <= p1.length && p2Card <= p2.length) {
      const [winner] = recursiveCombat([
        p1.slice(0, p1Card),
        p2.slice(0, p2Card),
      ]);

      if (winner === 1) {
        p1.push(p1Card, p2Card);
      } else {
        p2.push(p2Card, p1Card);
      }
    } else {
      if (p1Card > p2Card) {
        p1.push(p1Card, p2Card);
      } else {
        p2.push(p2Card, p1Card);
      }
    }
  }

  return [p1.length ? 1 : 2, p1.length ? p1 : p2];
};

export const solutionOne = (input) => {
  const players = parsePlayerDecks(input);
  const [_winner, deck] = combat(players);
  return score(deck);
};

export const solutionTwo = (input) => {
  const players = parsePlayerDecks(input);
  const [_winner, deck] = recursiveCombat(players);
  return score(deck);
};
