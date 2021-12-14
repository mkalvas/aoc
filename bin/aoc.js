#! /usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

process.env.NODE_ENV = 'production';

yargs(hideBin(process.argv))
  .scriptName('aoc')
  .commandDir('./cmds')
  .usage('\nUsage: aoc <command> [options]')
  .alias('h', 'help').argv;
