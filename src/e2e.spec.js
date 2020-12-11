import { aoc } from './lib';

const SNAPSHOT = `Day 1
  Puzzle 01 - Multiple: 1020036
  Puzzle 02 - Multiple: 286977330

Day 2
  Puzzle 01 - Valid Passwords: 528
  Puzzle 02 - Valid Passwords: 497

Day 3
  Puzzle 01 - Trees Encountered: 181
  Puzzle 02 - Trees Encountered: 1260601650

Day 4
  Puzzle 01 - Valid Passports: 245
  Puzzle 02 - Valid Passports: 133

Day 5
  Puzzle 01 - Pass ID: 913
  Puzzle 02 - Pass ID: 717

Day 6
  Puzzle 01 - Declared Customs Count: 6799
  Puzzle 02 - Declared Customs Count: 3354

Day 7
  Puzzle 01 - Possible Bag Colors: 302
  Puzzle 02 - Possible Bag Colors: 4165

Day 8
  Puzzle 01 - Accumulator Value: 1331
  Puzzle 02 - Accumulator Value: 1121

Day 9
  Puzzle 01 - Invalid Sequence: 57195069
  Puzzle 02 - Invalid Sequence: 7409241

Day 10
  Puzzle 01 - Adapter Configurations: 2775
  Puzzle 02 - Adapter Configurations: 518344341716992
`;

describe('e2e pinnning test for puzzle solutions', () => {
  it('gets the right answers for all the puzzles', () => {
    expect(aoc()).toBe(SNAPSHOT);
  });
});
