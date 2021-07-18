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

Day 11
  Puzzle 01 - Occupied Seats: 2448
  Puzzle 02 - Occupied Seats: 2234

Day 12
  Puzzle 01 - Manhattan Distance: 1457
  Puzzle 02 - Manhattan Distance: 106860

Day 13
  Puzzle 01 - Found Bus Time: 153
  Puzzle 02 - Found Bus Time: 471793476184394

Day 14
  Puzzle 01 - Bitmasked Sum: 7817357407588
  Puzzle 02 - Bitmasked Sum: 4335927555692

Day 15
  Puzzle 01 - 2020th Number: 447
  Puzzle 02 - 2020th Number: 11721679

Day 16
  Puzzle 01 - Error Rate: 27850
  Puzzle 02 - Error Rate: 491924517533

Day 17
  Puzzle 01 - Active Cubes: 223
  Puzzle 02 - Active Cubes: 1884

Day 18
  Puzzle 01 - Sum of Expressions: 15285807527593
  Puzzle 02 - Sum of Expressions: 461295257566346

Day 19
  Puzzle 01 - Valid Messages: 233
  Puzzle 02 - Valid Messages: 396
`;

describe('e2e pinnning test for puzzle solutions', () => {
  it('gets the right answers for all the puzzles', () => {
    expect(aoc()).toBe(SNAPSHOT);
  });
});
