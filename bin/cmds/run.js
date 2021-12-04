const { join } = require('path');
const chokidar = require('chokidar');
const { aoc } = require('../../build');

const run = (year, day, message) => {
  console.clear();
  console.log(aoc(year, day, message));
};

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
    .option('watch', {
      alias: 'w',
      describe: 'Watch for changes and re-run',
      default: false,
      type: 'boolean',
    })
    .group(['year', 'day'], 'Puzzle:');
};

exports.handler = function ({ year, day, watch }) {
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

  run(year, day, message); // always run once
  if (watch) {
    // TODO: Doesn't actually work. `aoc` isn't reloading on build changes.
    const path = `${join(__dirname, '../../build')}/**/*.js`;
    chokidar.watch(path, { ignored: ['**/*.spec.js'] }).on('change', () => {
      run(year, day, message); // sometimes keep running
    });
  }
};
