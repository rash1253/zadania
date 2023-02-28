function getMaxNumber(a, b, c, d) {
  let result = Math.max(a, b, c, d);
  if (
    typeof a == "number" &&
    typeof b == "number" &&
    typeof c == "number" &&
    typeof d == "number"
  ) {
    return result;
  } else {
    return 0;
  }
}
console.log(getMaxNumber(1, 9.2, 8, 2));