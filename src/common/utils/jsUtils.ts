declare let process: { env: any };
const ns = "[bolt]";
const CLAMP_MIN_MAX = ns + ` clamp: max cannot be less than min`;
/** Returns whether `process.env.NODE_ENV` exists and equals `env`. */
export function isNodeEnv(env: string) {
  return (
    typeof process !== "undefined" &&
    process.env &&
    process.env.NODE_ENV === env
  );
}

export function checkRange(val: number, min: number, max: number) {
  if (val == null) {
    return val;
  }
  if (max < min) {
    throw new Error("Max cannot be less than min");
  }

  return Math.min(Math.max(val, min), max);
}

export function clamp(val: number, min: number, max: number) {
  if (val == null) {
    return val;
  }
  if (max < min) {
    throw new Error(CLAMP_MIN_MAX);
  }
  return Math.min(Math.max(val, min), max);
}

/** Returns the number of decimal places in the given number. */
export function countDecimalPlaces(num: number) {
  if (!isFinite(num)) {
    return 0;
  }
  let e = 1;
  let p = 0;
  while (Math.round(num * e) / e !== num) {
    e *= 10;
    p++;
  }
  return p;
}
