import { nums } from '../../lib';

const DIVISOR = 20201227;

const crackLoopSize = (cardPubKey) => {
  let loopSize = 0;
  let encKey = 1;
  while (encKey !== cardPubKey) {
    encKey = (encKey * 7) % DIVISOR;
    loopSize++;
  }
  return loopSize;
};

const transform = (number, loopSize) => {
  let result = 1;
  for (let i = 0; i < loopSize; i++) {
    result = (result * number) % DIVISOR;
  }
  return result;
};

export const solutionOne = (input) => {
  const [cardPubKey, doorPubKey] = nums(input);
  const loopSize = crackLoopSize(cardPubKey);
  return transform(doorPubKey, loopSize);
};

export const solutionTwo = () => {};
