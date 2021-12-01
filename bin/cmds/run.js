const { aoc } = require('../../build');

exports.command = ['run [-y | --year] [-d | --day]', 'r'];
exports.describe = 'Run one or more puzzle';
exports.builder = (yargs) => {
  yargs
    .option('year', {
      alias: 'y',
      describe: 'Year of the puzzle(s) to run',
      default: 'all',
      type: 'string',
    })
    .option('day', {
      alias: 'd',
      describe: 'Day of the puzzle(s) to run',
      default: 'all',
      type: 'string',
    })
    .group(['year', 'day'], 'Puzzle:');
};

exports.handler = function ({ year, day }) {
  let message = '';
  if (year === 'all' && day === 'all') {
    message = 'Running all puzzles...';
  } else if (year === 'all' && day !== 'all') {
    message = `Running day ${day} for each year...`;
  } else if (year !== 'all' && day === 'all') {
    message = `Running all days for year ${year}...`;
  } else if (year !== 'all' && day !== 'all') {
    message = `Running day ${day} for year ${year}...`;
  }

  console.log(aoc(year, day, message));
};
