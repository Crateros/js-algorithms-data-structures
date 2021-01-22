// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by
// the sum of the squares of its digits. Repeat the process until
// the number equals 1 (where it will stay), or it loops endlessly
// in a cycle which does not include 1. Those numbers for which
// this process ends in 1 are happy. Return true if n is a happy
// number, and false if not.

// Example 1:
// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
// Input: n = 2
// Output: false

// We can use an outer loop that references a set lookup to see if we have previously
// encountered any of the sums that we are generating. If at any time our generated sum
// is 1 then we have a happy number, otherwise if our set already contains a generated
// number then we have entered an infinite loop and we can use a flag to break our loop
// and return false.

// To generate the new sums we can use a similar approach to reversing a number. We first
// get the remainder via the X % 10 approach and then decrement X by its lowest integer via
// X = Math.floor(X / 10). This will continue until X = 0. Meanwhile we grow our new sum by
// doing newSum += remainder^2 at each iteration of the loop.

const isHappyNumber = (number) => {
  let set = new Set;
  let loop = false;
  let currentSum = number;

  const generateNewSum = (current) => {
    let newSum = 0;
    while (current > 0) {
      newSum += (current % 10)**2;
      current = Math.floor(current / 10);
    }
    return newSum;
  }

  while (!loop) {
    if (currentSum === 1) return true;
    if (set.has(currentSum)) {
      loop = true;
      break;
    }
    set.add(currentSum)
    currentSum = generateNewSum(currentSum);
  }

  return false;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(2));