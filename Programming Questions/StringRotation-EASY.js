// String Shift: Given two strings A and B, return whether or not A can be
// shifted some number of times to get B.

// For example, if A is 'abcde' and B is 'cdeab', return true.
// If A is 'abc' and B is 'acb', return false.

// Check if lengths are different, if they are then it would be
// impossible to get one string from the other no matter how many
// shift operations you perform. If A and B have the same lengths
// the you can simply repeat one string on itself, creating all of the
// intermediary states that the other string could be when shifted.
// We then just check if the b string is contained within the concatenated
// a string, if true then b is a shifted permutation of a.

const stringShift = (a, b) => {
  if (a.length !== b.length) return false;
  return a.concat(a).includes(b);
};

const stringRotation = (a, b) => {
  if (a.length !== b.length) return false;
  return
}

console.log(stringShift('abcde', 'cdeab'));
console.log(stringShift('abcde', 'cdabc'));
console.log(stringShift('abc', 'acb'));
console.log(stringShift('abc', 'cab'));

