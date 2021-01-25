// Write a program to check whether a given number is an ugly number.
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3

// Example 2:
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2

// Example 3:
// Input: 14
// Output: false
// Explanation: 14 is not ugly since it includes another prime factor 7.

const isUglyNumber = (number) => {
  // Handle edge case where number = 0
  if (number === 0) return false;

  // Remove all of the factors of 5
  while (number % 5 === 0) {
    number /= 5;
  };

  // Remove all of the factors of 3
  while (number % 3 === 0) {
    number /= 3;
  };

  // Remove all factors of 2
  while (number % 2 === 0) {
    number /= 2;
  }

  // If resulting number is now 1 then original number
  // only contained 2, 3, and 5 as prime factors
  return number === 1 || number === -1;

  //   while (number % 5 === 0 || number % 3 === 0 || number % 2 === 0) {
  //   if (number % 5 === 0) {
  //     number /= 5;
  //     continue;
  //   }
  //   if (number % 3 === 0) {
  //     number /= 3;
  //     continue;
  //   }
  //   if (number % 2 === 0) {
  //     number /= 2;
  //     continue;
  //   }
  // }
}

console.log(isUglyNumber(6));
console.log(isUglyNumber(8));
console.log(isUglyNumber(14));
console.log(isUglyNumber(1));
console.log(isUglyNumber(0));
console.log(isUglyNumber(-1));
