import { solutionOne, solutionTwo } from './code';

const INPUT = [
  'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)',
  'trh fvjkl sbzzf mxmxvkd (contains dairy)',
  'sqjhc fvjkl (contains soy)',
  'sqjhc mxmxvkd sbzzf (contains fish)',
];

describe('puzzle one', () => {
  it('Finds the times allergens appear', () => {
    expect(solutionOne(INPUT)).toEqual(5);
  });
});

describe('puzzle two', () => {
  it('Finds the times allergens appear', () => {
    expect(solutionTwo(INPUT)).toEqual('mxmxvkd,sqjhc,fvjkl');
  });
});
