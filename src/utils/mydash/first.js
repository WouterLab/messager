export function first(list) {
  const isArray = Array.isArray(list);
  if (!isArray) return undefined;
  if (!list.length) return undefined;
  return list[0];
}
