const OFFSET = [-1, 0, 1];

const generate3dOffsets = () => {
  let offsets = [];
  OFFSET.forEach((x) => {
    OFFSET.forEach((y) => {
      OFFSET.forEach((z) => {
        if (x !== 0 || y !== 0 || z !== 0) offsets.push([x, y, z]);
      });
    });
  });
  return offsets;
};

const generate4dOffsets = () => {
  let offsets = [];
  OFFSET.forEach((x) => {
    OFFSET.forEach((y) => {
      OFFSET.forEach((z) => {
        OFFSET.forEach((w) => {
          if (x !== 0 || y !== 0 || z !== 0 || w !== 0) {
            offsets.push([x, y, z, w]);
          }
        });
      });
    });
  });
  return offsets;
};

const parse3dInput = (input) => {
  let state = new Set();
  input.forEach((l, y) =>
    l.split('').forEach((c, x) => {
      if (c === '#') state.add([x - 1, y - 1, 0].toString());
    })
  );
  return state;
};

const parse4dInput = (input) => {
  let state = new Set();
  input.forEach((l, y) =>
    l.split('').forEach((c, x) => {
      if (c === '#') state.add([x - 1, y - 1, 0, 0].toString());
    })
  );
  return state;
};

const translate = (point, offset) => {
  const coords = point.split(',');
  return coords.map((c, i) => Number(c) + offset[i]).join(',');
};

const solution = (parseInput, genOffsets) => (input) => {
  let activePoints = parseInput(input);

  const getNeighbors = (point) =>
    genOffsets().map((offset) => translate(point, offset));

  const getPointsToCheck = () => {
    let pointsToCheck = new Set();
    for (const point of activePoints) {
      pointsToCheck.add(point);
      getNeighbors(point).forEach((n) => pointsToCheck.add(n));
    }
    return pointsToCheck;
  };

  const countActiveNeighbors = (point) =>
    getNeighbors(point).reduce(
      (count, neighbor) => (activePoints.has(neighbor) ? count + 1 : count),
      0
    );

  const evolve = (pointsToCheck) => {
    let newActivePoints = new Set();
    for (const point of pointsToCheck) {
      const isActive = activePoints.has(point);
      const count = countActiveNeighbors(point);
      if (isActive && (count === 2 || count === 3)) newActivePoints.add(point);
      if (!isActive && count === 3) newActivePoints.add(point);
    }
    return newActivePoints;
  };

  const cycleState = () => {
    const pointsToCheck = getPointsToCheck(activePoints);
    return evolve(pointsToCheck);
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    activePoints = cycleState(activePoints);
  }

  return Array.from(activePoints).length;
};

export const solutionOne = solution(parse3dInput, generate3dOffsets);

export const solutionTwo = solution(parse4dInput, generate4dOffsets);
