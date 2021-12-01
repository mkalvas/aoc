#! /usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
  .scriptName('aoc')
  .commandDir('./cmds')
  .usage('\nUsage: aoc <command> [options]')
  .alias('h', 'help').argv;
