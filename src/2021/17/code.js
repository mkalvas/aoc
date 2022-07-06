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

const getStepRange = (v, min, max, stopZero = false) => {
  let minStep;
  let maxStep;
  for (let x = 0; x <= max; x += v) {
    if (x >= min) minStep = x;
    if (min <= x && x <= max) maxStep = x;
    if (stopZero) {
      v = v - 1 >= 0 ? v - 1 : 0;
    } else {
      v--;
    }
  }
  return [minStep, maxStep];
};

const validXVelocities = ({ xmin, xmax }) => {
  const vmin = minv(xmin);
  for (let i = vmin; i < xmin; i++) {
    if (i + i - 1 > xmax) {
      let xvs = [];
      for (let xv of range(vmin, i - 1)) {
        const [min, max] = getStepRange(xv, xmin, xmax);
        xvs.push({ v: xv, min, max });
      }
      return xvs;
    }
  }
};

const validYVelocities = ({ ymin, ymax }) => {
  const vmax = maxv(ymin);
  for (let i = vmax; i >= -vmax; i--) {
    if (i + i - 1 < ymin) {
      let yvs = [];
      for (let yv of range(i + 1, vmax)) {
        const [min, max] = getStepRange(yv, ymin, ymax);
        yvs.push({ v: yv, min, max });
      }
      return yvs;
    }
  }
};

export const solutionTwo = (input) => {
  const { volume, ...target } = getTarget(input[0]);
  let xvs = validXVelocities(target);
  let yvs = validYVelocities(target);
  let vs = xvs.map((xv) => yvs.map((yv) => [xv, yv]));
  console.log(xvs, yvs, vs);
  // return volume + vs.length;
};
