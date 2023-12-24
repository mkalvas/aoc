import { p2s } from '../../lib';

const act = (char, oldDelta, pos) => {
  let split;
  let delta = [...oldDelta];
  const dir = p2s(oldDelta);
  if (char !== '.') {
    if (char === '\\') {
      if (dir === '1,0') delta = [0, 1];
      else if (dir === '-1,0') delta = [0, -1];
      else if (dir === '0,1') delta = [1, 0];
      else if (dir === '0,-1') delta = [-1, 0];
    } else if (char === '/') {
      if (dir === '1,0') delta = [0, -1];
      else if (dir === '-1,0') delta = [0, 1];
      else if (dir === '0,1') delta = [-1, 0];
      else if (dir === '0,-1') delta = [1, 0];
    } else if (char === '|' && (dir === '1,0' || dir === '-1,0')) {
      delta = [0, 1];
      split = { pos, delta: [0, -1] };
    } else if (char === '-' && (dir === '0,1' || dir === '0,-1')) {
      delta = [1, 0];
      split = { pos, delta: [-1, 0] };
    }
  }
  return [delta, split];
};

export const solve = (input, beams, id) => {
  let energized = new Set();
  let seen = new Set();
  while (beams.length > 0) {
    let remove = [];
    for (let i = 0; i < beams.length; i++) {
      const beam = beams[i];
      const pos = [beam.pos[0] + beam.delta[0], beam.pos[1] + beam.delta[1]];

      if (
        pos[0] < 0 ||
        pos[0] >= input[0].length ||
        pos[1] < 0 ||
        pos[1] >= input.length
      ) {
        remove.push(beam.id);
        continue;
      }

      const [delta, split] = act(input[pos[1]][pos[0]], beam.delta, pos);
      if (seen.has(p2s([...pos, ...delta]))) {
        remove.push(beam.id);
        continue;
      }

      beams[i] = { id: beam.id, pos, delta };
      seen.add(p2s([...pos, ...delta]));

      if (split) {
        beams.push({ ...split, id: ++id });
        seen.add(p2s([...pos, split.delta]));
      }

      energized.add(p2s(pos));
    }

    beams = beams.filter((b) => !remove.includes(b.id));
  }

  return energized.size;
};

export const solutionOne = (input) => {
  let id = 0;
  let beams = [{ id: id++, pos: [-1, 0], delta: [1, 0] }];
  return solve(input, beams, id);
};

export const solutionTwo = (input) => {
  let id = 0;
  let beams = [];
  for (let y = 0; y < input.length; y++) {
    beams.push({ id: ++id, pos: [-1, y], delta: [1, 0] });
    beams.push({ id: ++id, pos: [input[0].length, y], delta: [-1, 0] });
  }
  for (let x = 0; x < input.length; x++) {
    beams.push({ id: ++id, pos: [x, -1], delta: [0, 1] });
    beams.push({ id: ++id, pos: [x, input.length], delta: [0, -1] });
  }
  return beams.map((beam) => solve(input, [beam], id)).max();
};
