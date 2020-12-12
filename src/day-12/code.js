const CARDINALS = ['E', 'S', 'W', 'N'];
const CARDINAL_LOG = { E: 0, S: 0, W: 0, N: 0 };

const parseMoves = (lines) => lines.map((l) => [l[0], parseInt(l.slice(1))]);

const getManhattanDistance = (log) => {
  const EW = log['E'] + log['W'] * -1;
  const NS = log['N'] + log['S'] * -1;
  return Math.abs(EW) + Math.abs(NS);
};

const turn = (heading, dir, rot) => {
  const turns = (dir === 'R' ? rot : 360 - rot) / 90;
  const newIndex = (CARDINALS.indexOf(heading) + turns) % 4;
  return CARDINALS[newIndex];
};

const move = (log, dir, len, times = 1) => ({
  ...log,
  [dir]: log[dir] + len * times,
});

const movements = (log, [dir, len]) => {
  if (dir === 'F') return move(log, log.heading, len);
  if (CARDINALS.includes(dir)) return move(log, dir, len);
  return { ...log, heading: turn(log.heading, dir, len) };
};

const waypointForward = (log, times) =>
  Object.entries(log.wp).reduce((acc, [d, l]) => move(acc, d, l, times), log);

const rotateWaypoint = (waypoint, dir, rot) =>
  Object.entries(waypoint).reduce(
    (acc, [d, l]) => ({ ...acc, [turn(d, dir, rot)]: l }),
    waypoint
  );

const waypoints = (log, [dir, len]) => {
  if (dir === 'F') return waypointForward(log, len);
  if (CARDINALS.includes(dir)) return { ...log, wp: move(log.wp, dir, len) };
  return { ...log, wp: rotateWaypoint(log.wp, dir, len) };
};

const travel = (moves, ruleset, initLog) =>
  moves.reduce(ruleset, { ...initLog, ...CARDINAL_LOG });

export const solutionOne = (input) =>
  getManhattanDistance(travel(parseMoves(input), movements, { heading: 'E' }));

export const solutionTwo = (input) =>
  getManhattanDistance(
    travel(parseMoves(input), waypoints, {
      wp: { ...CARDINAL_LOG, E: 10, N: 1 },
    })
  );
