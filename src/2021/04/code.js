import { groupLines, nums, sum, transpose } from '../../lib';

class Bingo {
  constructor(lines) {
    this.marks = [];
    this.board = lines.map((line) => line.split(' ').filter((l) => l !== ''));
  }

  mark(num) {
    this.lastMark = num;
    this.marks.push(num);
    this.board = this.board.map((r) => r.map((c) => (c === num ? 'X' : c)));
    this.updateBingo();
  }

  updateBingo() {
    const board = [...this.board, ...transpose(this.board)];
    this.hasBingo = board.some((row) => row.every((c) => c === 'X'));
  }

  score() {
    let s = sum(this.board.map((r) => sum(nums(r.filter((c) => c !== 'X')))));
    return s * +this.lastMark;
  }
}

const solution = (input) => {
  const [ns, ...bs] = groupLines(input);
  let boards = bs.map((b) => new Bingo(b));
  let winners = [];
  for (const num of ns[0].split(',')) {
    boards.forEach((b) => {
      b.mark(num);
      if (b.hasBingo) winners.push(b.score());
      boards = boards.filter((b) => !b.hasBingo);
    });
  }
  return [winners[0], winners.at(-1)];
};

export const solutionOne = (input) => solution(input)[0];
export const solutionTwo = (input) => solution(input)[1];
