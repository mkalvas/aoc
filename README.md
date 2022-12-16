# Advent of Code

This is a small repo for coding and testing solutions to [Advent of Code](https://adventofcode.com) puzzles.

## [2020](https://adventofcode.com/2020)

This year I decided to write in JS because I know it well and I wanted to try and stick with it. I'm guessing that using a familiar language will cut down on the time it takes to solve each day and remove the frustrating gap between knowing the solution but not getting it to work right because of my ignorance of a new language. Both of those should give me a better shot at actually completing this year.

I also decided to write up my thought process and solution explanations on my blog. Here's [a link to the index post](https://mkalvas.com/blog/aoc-2020) that links out to all the other solutions.

## [2021](https://adventofcode.com/2021)

Last year was super successful and I finished all the puzzles! So this year I'm going to stick with JS since it's working. Here's the link to the new [blog post](https://mkalvas.com/blog/aoc-2021).

## [2015](https://adventofcode.com/2015)

I'm going back and doing the 2015 year during the summer of 2022. I'm going to attempt to do each day in JS, Haskell, and Rust. As with the other years, here's a link to the [blog post](https://mkalvas.com/blog/aoc-2015).

## [2022](https://adventofcode.com/2022)

December 2022 is upon us. You know the drill by now. JS as the main language, maybe some others sprinkled in here and there, and the annual [blog post](https://mkalvas.com/blog/aoc-2022).

## A note on `/lib` and the solution code

Over the course of doing these puzzles, I've come up a standard library of helper functions. These are things that are either verbose or common enough to warrant a well defined and tested function.

I'm experimenting with including both a functional and prototype extension version of most of these functions so that they can be used easily in any circumstance. Some of these are not direct translations from one paradigm to the other though. Also, extending base JS is a pretty standard anti-pattern that I'm well aware of. **Use at your own risk, don't use anything in this repo as an example of good production code**.

## Organization

The solutions are in the [`./src`](src) folder organized by year and day. To simplify setup, testing, and running, all the days adhere to a template structure.

Each day folder has:

1. `code.js` — must export a `solutionOne` and `solutionTwo`
2. `input.txt` — the puzzle input downloaded from AOC
3. `puzzle.md` — a copy of the puzzle text in markdown
4. `test.spec.js` — a spec file with whatever tests for the day. This should test the `solutionOne` and `solutionTwo` functions from `code.js`.
5. `index.js` — must export an object with the following interface

```js
{
  label: "Label for the day's answer", // purely for display purposes
  path: `${__dirname}/input.txt`, // always this exactly
  solutionOne,
  solutionTwo,
  answers: ['one', 'two'], // answers with real inputs for e2e purposes
};
```

To add a new day, run the CLI `new` command ([see below](#cli)) which will copy a template day to the year and day specified.

## Commands

```sh
# Install deps
npm install

# Clean and run build in watch mode for dev
npm run dev

# Running tests
npm run test
npm run test -- --watch 2020/01 # run just 2020 day 1 in watch mode

# Run build once
npm run build

# Run all puzzles and see the solution output (requires a build to run)
npm start
```

### CLI

I've also started working on CLI for running different days and getting/submitting answers. Right now it only runs solutions.

To install the CLI run

```sh
# In the project root
npm run build

# if you want to install just the source version you built
# you'll have to reinstall after each built
npm i -g .

# or if you want to code and build and re-run via global `aoc` (recommended)
npm link

# Test it installed correctly
aoc run --help
```

To add a templated day

```sh
aoc new <year> <day>
```

Then while working on a solution the typical workflow is something like this. (given you used the `npm link` installation)

1. Run build watcher and tests in background
2. Once the tests are passing, run the CLI for the real input and get an answer

```sh
# In one terminal
npm run dev

# In another terminal, watch the day's tests
npm test -- --watch 2020/01

# Once tests are green, run and get an answer
aoc run -y 2020 -d 01
```

### Other languages

I occasionally write solutions in other languages for fun. Here are some quick ways to run them given you have the required toolchain installed.

- Elixir: `elixir code.exs`
- Haskell: `runhaskell code.hs`
- Rust: `cargo run`

## Roadmap

- [ ] Build a better CLI probably using rust
- [ ] Build a better Rust specific runnner
- [ ] Build a better Haskell specific runner
