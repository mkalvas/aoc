export const clampGte = (n, l) => clamp(n, l, Infinity);
export const clampLte = (n, r) => clamp(n, -Infinity, r);
export const clamp = (n, l, r) => (n < l ? l : n > r ? r : n);
