
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:

// Could you do it without any loop/recursion in O(1) runtime?

const addDigits = (number) => {
  let currentNumber = 0;

  while (number > 0) {
    currentNumber += number % 10;
    number = Math.floor(number / 10);

    // If we have exhausted number but current number is still 2
    // digits in length (number > 9) then we need to keep looping
    // so we set number to currentNumber and reset currentNumber
    if (number === 0 && currentNumber > 9) {
      number = currentNumber;
      currentNumber = 0;
    }
  }

  return currentNumber;
}

console.log(addDigits(38));

