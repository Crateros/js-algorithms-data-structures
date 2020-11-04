// String Shift: Given two strings A and B, return whether or not A can be
// shifted some number of times to get B.

// For example, if A is 'abcde' and B is 'cdeab', return true.
// If A is 'abc' and B is 'acb', return false.

const stringShift = (a, b) => {
  if (a.length !== b.length) return false;
  return a.concat(a).includes(b);
};

console.log(stringShift('abcde', 'cdeab'));
console.log(stringShift('abcde', 'cdabc'));
console.log(stringShift('abc', 'acb'));
