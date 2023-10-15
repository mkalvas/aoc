import '../../lib/extensions';

const hasThreeVowels = (s) => /([a|e|i|o|u].*){3,}/.test(s);
const hasDouble = (s) => /(.)\1/.test(s);
const hasNoBadPairs = (s) => !/(ab|cd|pq|xy)/.test(s);
const isNice1 = (s) => hasThreeVowels(s) && hasDouble(s) && hasNoBadPairs(s);

const hasDoublePair = (s) => /(..).*\1/.test(s);
const hasSandwich = (s) => /(.).\1/.test(s);
const isNice2 = (s) => hasDoublePair(s) && hasSandwich(s);

export const solutionOne = (input) => input.map(isNice1).count(true);
export const solutionTwo = (input) => input.map(isNice2).count(true);
