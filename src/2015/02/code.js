import { sum, numSort } from '../../lib';

const parse = (line) => line.split('x').map(Number).sort(numSort);

const vol = (l, w, h) => l * w * h;
const area = (l, w, h) => 2 * l * w + 2 * w * h + 2 * h * l;
const minSideArea = (min, mid) => min * mid;
const minSidePerimiter = (min, mid) => 2 * min + 2 * mid;

const paperReq = (dim) => area(...dim) + minSideArea(...dim);
const ribbonReq = (dim) => vol(...dim) + minSidePerimiter(...dim);

export const solutionOne = (input) => sum(input.map(parse).map(paperReq));
export const solutionTwo = (input) => sum(input.map(parse).map(ribbonReq));
