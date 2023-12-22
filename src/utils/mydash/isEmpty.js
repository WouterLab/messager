export function isEmpty(value) {
  if (
    value === null ||
    value === true ||
    value === false ||
    value === 0 ||
    value === "" ||
    value === undefined ||
    value == [] ||
    value == {} ||
    typeof value === "number"
  ) {
    return true;
  }

  return false;
}
