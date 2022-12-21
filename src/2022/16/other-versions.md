# Other versions of `2022-12-16`

Not working, first pass idea. Can we get lucky and just assume we can always pick the next best neighbor and backtrack if we get stuck? Unfortunately no, we need to do something more thorough. The optimal total pressure path is a locally non-optimal path at many decision points. There's not a good way to make that decision, so we need to explore the state space fully, but hopefully we can reduce the state space that needs to be explored.

```js
const parse = (map, line) => {
  const flow = +line.match(/\d+/g)[0];
  const rooms = line.match(/([A-Z][A-Z])/g);
  map[rooms[0]] = { flow, nbrs: rooms.slice(1), open: 0, visited: false };
  return map;
};

const score = (map) => vals(map).reduce((s, r) => s + r.open * r.flow, 0);
const move = (pos, map) =>
  map[pos].nbrs
    .filter((n) => !map[n].visited)
    .sort((a, b) => map[b].flow - map[a].flow)[0];

export const solutionOne = (input) => {
  let pos = 'AA';
  let timer = 29;
  let backtrack = [];
  let map = input.reduce(parse, {});
  while (timer > 0) {
    const room = map[pos];
    room.visited = true;
    timer--;

    if (room.flow !== 0 && room.open === 0) {
      print(map, pos, timer + 1, `Open ${pos}`);
      room.open = timer;
    } else {
      let next = move(pos, map);
      if (next) {
        backtrack.push(pos);
      } else {
        next = backtrack.pop();
      }
      print(map, pos, timer + 1, `Move to ${next}`);
      pos = next;
    }
  }

  console.log(map);
  return score(map);
};
```

I found the [Floyd-Warshall distances algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm) when searching for quick ways to get distances from each node to all others and I see that a lot of other people used it for their answers today. This got put into `lib` since it's a strong general algorithm that will likely have more use in the future.

Then, after a lot of faffing with distances and tracking state, and not really getting anywhere, I used [this person's answer](https://github.com/juanplopes/advent-of-code-2022/blob/main/day16.py) as a guide for how to use a bit-shifted state marker. I can't take credit for this, but I learned some cool techniques here.
