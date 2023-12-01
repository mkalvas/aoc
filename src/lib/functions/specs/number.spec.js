import * as num from '../number';

describe('clamp', () => {
  it('clamps a number to an inclusive range', () => {
    expect(num.clamp(0, -1, 1)).toBe(0);
    expect(num.clamp(-1, -1, 1)).toBe(-1);
    expect(num.clamp(-2, -1, 1)).toBe(-1);
    expect(num.clamp(1, -1, 1)).toBe(1);
    expect(num.clamp(2, -1, 1)).toBe(1);
  });

  it('clamps a number to be less than or equal to a value', () => {
    expect(num.clampLte(1, -1)).toBe(-1);
    expect(num.clampLte(-1, -1)).toBe(-1);
    expect(num.clampLte(-10, -1)).toBe(-10);
    expect(num.clampLte(-Infinity, -1)).toBe(-Infinity);
  });

  it('clamps a number to be greater than or equal to a value', () => {
    expect(num.clampGte(0, 1)).toBe(1);
    expect(num.clampGte(1, 1)).toBe(1);
    expect(num.clampGte(10, 1)).toBe(10);
    expect(num.clampGte(Infinity, 1)).toBe(Infinity);
  });
});
