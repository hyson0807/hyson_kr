export type AnimationDelay = 0 | 100 | 200 | 300 | 400 | 500;

export function calcDelay(index: number, columns: number): AnimationDelay {
  return Math.min((index % columns) * 100, 500) as AnimationDelay;
}
