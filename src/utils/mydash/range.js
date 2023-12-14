const baseRange = (start, end, step, reverse) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[reverse ? length : ++index] = start;
    start += step;
  }

  return result;
};

export function range(start = 0, end, step, reverse) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step, reverse);
}

export function rangeRight(start, end, step) {
  return range(start, end, step, true);
}
