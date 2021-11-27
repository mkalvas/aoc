import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'sesenwnenenewseeswwswswwnenewsewsw',
  'neeenesenwnwwswnenewnwwsewnenwseswesw',
  'seswneswswsenwwnwse',
  'nwnwneseeswswnenewneswwnewseswneseene',
  'swweswneswnenwsewnwneneseenw',
  'eesenwseswswnenwswnwnwsewwnwsene',
  'sewnenenenesenwsewnenwwwse',
  'wenwwweseeeweswwwnwwe',
  'wsweesenenewnwwnwsenewsenwwsesesenwne',
  'neeswseenwwswnwswswnw',
  'nenwswwsewswnenenewsenwsenwnesesenew',
  'enewnwewneswsewnwswenweswnenwsenwsw',
  'sweneswneswneneenwnewenewwneswswnese',
  'swwesenesewenwneswnwwneseswwne',
  'enesenwswwswneneswsenwnewswseenwsese',
  'wnwnesenesenenwwnenwsewesewsesesew',
  'nenewswnwewswnenesenwnesewesw',
  'eneswnwswnwsenenwnwnwwseeswneewsenese',
  'neswnwewnwnwseenwseesewsenwsweewe',
  'wseweeenwnesenwwwswnew',
];

describe('puzzle one', () => {
  it('Counts the number of black tiles', () => {
    expect(solutionOne(INPUT)).toEqual(10);
  });
});

describe('puzzle two', () => {
  it('Counts the number of black tiles', () => {
    expect(solutionTwo(INPUT)).toEqual(2208);
  });
});
