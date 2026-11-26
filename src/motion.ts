import {Easing, interpolate} from 'remotion';

export type Pose = {t: number; x: number; y: number; scale: number; ry: number; rz: number; rx?: number; sy?: number};
const ease = Easing.bezier(0.65, 0, 0.25, 1);

/** Sample explicit spatial camera beats. Times are seconds, independent of fps. */
export const poseAt = (t: number, poses: readonly Pose[]) => {
  const keys = poses.map(p => p.t);
  const val = (key: 'x' | 'y' | 'scale' | 'ry' | 'rz' | 'rx' | 'sy') => interpolate(t, keys, poses.map(p => p[key] ?? (key === 'sy' ? 1 : 0)), {
    easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  return {x: val('x'), y: val('y'), scale: val('scale'), ry: val('ry'), rz: val('rz'), rx: val('rx'), sy: val('sy')};
};

export const incomePoses: Pose[] = [
  {t: 0, x: 500, y: 270, scale: .64, ry: -19, rz: 1.5},
  {t: .50, x: 500, y: 267, scale: .64, ry: -19, rz: 1.5},
  {t: 1.10, x: 359, y: 624, scale: 1.015, ry: -6, rz: -1.5},
  {t: 1.97, x: 359, y: 624, scale: 1.015, ry: -6, rz: -1.5},
  {t: 2.36, x: 280, y: -420, scale: 1.22, ry: -10, rz: 3},
  {t: 3.16, x: 160, y: -390, scale: .9, ry: -10, rz: 3},
  {t: 4.13, x: 990, y: -100, scale: .72, ry: -13, rz: 4},
  {t: 4.70, x: 474, y: 352, scale: .505, ry: 4, rz: -1.8},
  {t: 6, x: 474, y: 352, scale: .505, ry: 4, rz: -1.8},
];
export const invoicePoses: Pose[] = [
  {t: 0, x: 502, y: 920, scale: .55, ry: 24, rz: -9},
  {t: .50, x: 502, y: 920, scale: .55, ry: 24, rz: -9},
  {t: 1.10, x: 444, y: 1540, scale: .93, ry: 21, rz: -9},
  {t: 1.97, x: 444, y: 1540, scale: .93, ry: 21, rz: -9},
  {t: 2.39, x: 306, y: 632, scale: 1.075, ry: 15, rz: 1.3},
  {t: 3.09, x: 306, y: 632, scale: 1.075, ry: 15, rz: 1.3},
  {t: 3.51, x: -510, y: 699, scale: 1.04, ry: 46, rz: -2},
  {t: 4.13, x: -510, y: 699, scale: 1.04, ry: 46, rz: -2},
  {t: 4.70, x: 504, y: 927, scale: .52, ry: 4, rz: -1.5, sy: .92},
  {t: 6, x: 504, y: 927, scale: .52, ry: 4, rz: -1.5, sy: .92},
];
export const transactionPoses: Pose[] = [
  {t: 0, x: -107, y: 906, scale: .65, ry: -25, rz: -5},
  {t: .50, x: -107, y: 906, scale: .65, ry: -25, rz: -5},
  {t: 1.10, x: -660, y: 1510, scale: 1.15, ry: -25, rz: -5},
  {t: 2.36, x: -680, y: 642, scale: 1.02, ry: -18, rz: -6},
  {t: 3.09, x: -680, y: 642, scale: 1.02, ry: -18, rz: -6},
  {t: 3.52, x: 354, y: 614, scale: 1.07, ry: -20, rz: -4, sy: .93},
  {t: 4.13, x: 354, y: 614, scale: 1.07, ry: -20, rz: -4, sy: .93},
  {t: 4.70, x: 13, y: 817, scale: .51, ry: -15, rz: 0},
  {t: 6, x: 13, y: 817, scale: .51, ry: -15, rz: 0},
];
export const breakdownPoses: Pose[] = [
  {t: 0, x: -40, y: 285, scale: .75, ry: 10, rz: 3},
  {t: .50, x: -40, y: 285, scale: .75, ry: 10, rz: 3},
  {t: 1.10, x: -660, y: 400, scale: 1.2, ry: 10, rz: 3},
  {t: 2.36, x: -620, y: -480, scale: 1.1, ry: 10, rz: 3},
  {t: 3.09, x: -620, y: -480, scale: 1.1, ry: 10, rz: 3},
  {t: 3.52, x: 310, y: 37, scale: .86, ry: -12, rz: 3},
  {t: 4.13, x: 310, y: 37, scale: .86, ry: -12, rz: 3},
  {t: 4.70, x: 111, y: 403, scale: .565, ry: 7, rz: 4},
  {t: 6, x: 111, y: 403, scale: .565, ry: 7, rz: 4},
];
export const categoriesPoses: Pose[] = [
  {t: 0, x: 866, y: 570, scale: .65, ry: 8, rz: 4},
  {t: .50, x: 866, y: 570, scale: .65, ry: 8, rz: 4},
  {t: 1.10, x: 870, y: 1080, scale: 1.08, ry: 8, rz: 4},
  {t: 1.97, x: 870, y: 1080, scale: 1.08, ry: 8, rz: 4},
  {t: 2.36, x: 1040, y: 160, scale: 1.1, ry: 8, rz: 4},
  {t: 4.13, x: 1460, y: 440, scale: .8, ry: 8, rz: 4},
  {t: 4.70, x: 745, y: 548, scale: .58, ry: 8, rz: -1},
  {t: 6, x: 745, y: 548, scale: .58, ry: 8, rz: -1},
];
