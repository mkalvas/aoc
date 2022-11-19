import { gauss, range } from '../../lib';

const maxv = (ymin) => Math.abs(ymin) - 1;
const maxHeight = (ymin) => gauss(maxv(ymin));

const getTarget = (input) => {
  const [[xmin, xmax], [ymin, ymax]] = input
    .split('target area: ')[1]
    .split(', ')
    .map((r) => r.slice(2).split('..').map(Number));
  const volume = (ymax - ymin + 1) * (xmax - xmin + 1);
  return { xmin, xmax, ymin, ymax, volume };
};

export const solutionOne = (input) => maxHeight(getTarget(input[0]).ymin);

/* WTF is going on with this */

const minv = (min) => {
  for (let v = 1; v <= min; v++) {
    if (gauss(v) >= min) return v;
  }
};

const checkXv = (xv, xmin, xmax) => {
  let pos = 0;
  while (true) {
    if (xmin <= pos && pos <= xmax) {
      return true;
    } else if (pos > xmax) {
      return false;
    }
    pos += xv;
    xv--;
    if (xv < 0) return false;
  }
};

const validXVelocities = ({ xmin, xmax }) => {
  const vmin = minv(xmin);
  let xvs = [vmin];
  for (let i = vmin + 1; i <= xmax; i++) {
    if (checkXv(i, xmin, xmax)) {
      xvs.push(i);
    }
  }
  return xvs;
};

const checkYv = (yv, ymin, ymax) => {
  let pos = 0;
  while (true) {
    if (ymin <= pos && pos <= ymax) {
      return true;
    } else if (pos < ymin) {
      return false;
    }
    pos += yv;
    yv--;
  }
};

const validYVelocities = ({ ymin, ymax }) => {
  const vmax = maxv(ymin);
  let yvs = [vmax];
  for (let i = vmax - 1; i >= ymin; i--) {
    if (checkYv(i, ymin, ymax)) {
      yvs.push(i);
    }
  }
  return yvs;
};

const checkTrajectory = (xv, yv, { xmin, xmax, ymin, ymax }) => {
  let x = 0;
  let y = 0;
  while (true) {
    if (ymin <= y && y <= ymax && xmin <= x && x <= xmax) {
      return true;
    } else if (y < ymin) {
      return false;
    }
    x += xv;
    y += yv;
    xv = xv <= 0 ? 0 : xv - 1;
    yv--;
  }
};

export const solutionTwo = (input) => {
  const { volume, ...target } = getTarget(input[0]);
  const xvs = validXVelocities(target);
  const yvs = validYVelocities(target);
  let vs = [];
  for (const xv of xvs) {
    for (const yv of yvs) {
      if (checkTrajectory(xv, yv, target)) {
        vs.push([xv, yv]);
      }
    }
  }

  return vs.length;
};
