// Given a 32-bit signed integer, reverse digits of an integer.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

const reverseIntegerString = integer => parseInt(integer.toString().split('').reverse().join(''));

const reverseIntegerMath = integer => {
  const isNegative = integer > -1 ? 1 : -1
  let normalizedInteger = integer * isNegative;
  let remainder = 0;
  let reversed = 0;
  
  while (normalizedInteger > 0) {
    remainder = normalizedInteger % 10;
    normalizedInteger = Math.floor(normalizedInteger / 10);
    reversed = (reversed * 10) + remainder;
  }

  return reversed * isNegative;
};

console.log(reverseIntegerString(321));
console.log(reverseIntegerString(32123));

console.log(reverseIntegerMath(321));
console.log(reverseIntegerMath(32123));
console.log(reverseIntegerMath(-321));
console.log(reverseIntegerMath(0));
console.log(reverseIntegerMath(-32123));
