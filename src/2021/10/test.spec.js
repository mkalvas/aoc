import { solutionOne, solutionTwo } from './code';

const INPUT = [
  '[({(<(())[]>[[{[]{<()<>>',
  '[(()[<>])]({[<{<<[]>>(',
  '{([(<{}[<>[]}>{[]{[(<()>',
  '(((({<>}<{<{<>}{[]{[]{}',
  '[[<[([]))<([[{}[[()]]]',
  '[{[{({}]{}}([{[{{{}}([]',
  '{<[[]]>}<{[{[{[]{()[[[]',
  '[<(<(<(<{}))><([]([]()',
  '<{([([[(<>()){}]>(<<{{',
  '<{([{{}}[<[[[<>{}]]]>[]]',
];

describe('puzzle one', () => {
  it('Finds and scores the syntax errors', () => {
    expect(solutionOne(INPUT)).toEqual(26397);
  });
});

describe('puzzle two', () => {
  it('Finds and scores the autocomplete lines', () => {
    expect(solutionTwo(INPUT)).toEqual(288957);
  });
});
