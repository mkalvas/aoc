const { join } = require('path');
const { execSync } = require('child_process');

exports.command = ['obfuscate <year> <day>', 'o'];
exports.describe = 'Run terser on a file for ascii art obfuscation';
exports.builder = (yargs) => {
  yargs
    .positional('year', {
      describe: 'Year of the file to obfuscate',
      default: new Date().getFullYear(),
      type: 'string',
    })
    .positional('day', {
      describe: 'Day of the file to obfuscate',
      default: new Date().getDate() + 1,
      type: 'string',
    });
};

exports.handler = function ({ year, day }) {
  const rootPath = join(__dirname, '..', '..');
  const dayPath = join(rootPath, 'src', year, day);
  const terserPath = join(rootPath, 'node_modules', '.bin', 'terser');

  console.log(`Obfuscating ${year} day ${day}...`);
  execSync(
    `${terserPath} ${dayPath}/code.js -c passes=2 -m topLevel -o ${dayPath}/code.min.js`
  );
};
