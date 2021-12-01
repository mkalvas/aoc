import { arrayEquals, groupLines, nums } from '../../lib';

const parsePlayerDecks = (input) =>
  groupLines(input).map((player) => nums(player.slice(1)));

const score = (deck) =>
  deck.reduce((score, card, i) => score + card * (deck.length - i), 0);

const higherCardWins = (c1, c2, p1, p2) => {
  c1 > c2 ? p1.push(c1, c2) : p2.push(c2, c1);
};

const combat = ([p1, p2]) => {
  while (p1.length && p2.length) {
    const c1 = p1.shift();
    const c2 = p2.shift();
    higherCardWins(c1, c2, p1, p2);
  }
  return { winner: p1.length ? 1 : 2, deck: p1.length ? p1 : p2 };
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
    if (gameInStack(gameStack, [p1, p2])) return { winner: 1, deck: p1 };
    gameStack.push([[...p1], [...p2]]);

    const c1 = p1.shift();
    const c2 = p2.shift();

    if (c1 <= p1.length && c2 <= p2.length) {
      const { winner } = recursiveCombat([p1.slice(0, c1), p2.slice(0, c2)]);
      winner === 1 ? p1.push(c1, c2) : p2.push(c2, c1);
    } else {
      higherCardWins(c1, c2, p1, p2);
    }
  }

  return { winner: p1.length ? 1 : 2, deck: p1.length ? p1 : p2 };
};

const solution = (game) => (input) => {
  const players = parsePlayerDecks(input);
  const { deck } = game(players);
  return score(deck);
};

export const solutionOne = solution(combat);

export const solutionTwo = solution(recursiveCombat);
