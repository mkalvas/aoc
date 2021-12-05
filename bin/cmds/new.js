const { join } = require('path');
const { execSync } = require('child_process');

exports.command = ['new <year> <day>', 'n'];
exports.describe = 'Add a new day from template';
exports.builder = (yargs) => {
  yargs
    .positional('year', {
      describe: 'Year of the puzzle',
      default: new Date().getFullYear(),
      type: 'string',
    })
    .positional('day', {
      describe: 'Day of the puzzle',
      default: new Date().getDate() + 1,
      type: 'string',
    });
};

exports.handler = function ({ year, day }) {
  const dayPath = join(__dirname, '..', '..', 'src', year, day);
  const templatePath = join(__dirname, '..', 'template');

  console.log(`Creating ${year} day ${day} from template...`);
  execSync(`mkdir -p ${dayPath}`);
  execSync(`cp -a ${templatePath}/. ${dayPath}`);
};
