export function last(list) {
  const isArray = Array.isArray(list);
  if (!isArray) return undefined;
  if (!list.length) return undefined;
  return list[list.length - 1];
}
