import { counter } from '../../lib';

const VALS = { A: 14, K: 13, Q: 12, J: 11, T: 10 };

const rank = (cards) => {
  const counts = Object.values(counter(cards)).desc();
  if (counts[0] === 5) return 6; // five of a kind;
  if (counts[0] === 4) return 5; // four of a kind;
  if (counts[0] === 3 && counts.length === 2) return 4; // full house;
  if (counts[0] === 3 && counts.length > 2) return 3; // three of a kind;
  if (counts[0] === 2 && counts.length === 3) return 2; // two pair;
  if (counts[0] === 2 && counts.length > 3) return 1; // one pair;
  return 0; // high card;
};

const swap = (oldCards, bid) => {
  const cntr = counter(oldCards.filter((c) => c !== 1));
  const freq = Object.values(cntr).desc()[0];
  const best = Object.entries(cntr).find(([k, v]) => v === freq && k !== '1');
  if (!best) return oldCards; // only jokers
  return oldCards.map((c) => (c === 1 ? +best[0] : c));
};

const parseHand = (line, jokers) => {
  const [chars, bid] = line.split(' ');
  let cards = chars.split('').map((c) => VALS[c] ?? +c);
  if (jokers) cards = cards.map((c) => (c === 11 ? 1 : c));
  return { bid: +bid, cards, rank: rank(jokers ? swap(cards) : cards) };
};

const strengthByCard = (a, b, i) => {
  const cmp = a.cards[i] - b.cards[i];
  return cmp !== 0 || i === a.cards.length - 1
    ? cmp
    : strengthByCard(a, b, i + 1);
};

const solve = (input, jokers) =>
  input
    .map((l) => parseHand(l, jokers))
    .sort((a, b) => a.rank - b.rank || strengthByCard(a, b, 0))
    .reduce((s, h, i) => s + h.bid * (i + 1), 0);

export const solutionOne = (input) => solve(input, false);
export const solutionTwo = (input) => solve(input, true);
