
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
    // so we set number to currentNumber and reset currentNumber.
    // We need to check if number === 0 to see if we have actually
    // exhausted our current number, otherwise we would prematurely
    // try to create a sum with digits still remaining in number
    if (number === 0 && currentNumber > 9) {
      number = currentNumber;
      currentNumber = 0;
    }
  }

  return currentNumber;
}

const addDigitsAgain = (number) => {
  if (number < 10) return number;
  let result = 0;
  while (number > 0) {
    result += number % 10;
    number = Math.floor(number / 10);

    if (number === 0 && result > 9) {
      number = result;
      result = 0;
    }
  }
  return result;
}

const oneLastTime = (number) => {
  if (number < 10) return number
  let currentSum = 0;
  while (number > 0) {
    currentSum += number % 10;
    console.log(currentSum);
    number = Math.floor(number / 10);
    console.log(number);

    if (number === 0 && currentSum > 9) {
      console.log(currentSum);
      number = currentSum;
      currentSum = 0;
    }
  }
  return currentSum;
}

const actuallyLast = (number) => {
  if (number < 10) return number;
  let currentSum = 0;

  while (number > 0) {
    currentSum += number % 10;
    number = Math.floor(number / 10);

    if (number === 0 && currentSum > 9) {
      number = currentSum;
      currentSum = 0;
    }
  }
  return currentSum;
}

//     let currentSum = num;

//     const generateNewSum = (current) => {
//         let newSum = 0;

//         while (current > 0) {
//             newSum += current % 10;
//             current = Math.floor(current / 10);
//         }

//         return newSum;
//     }

//     while (Math.floor(currentSum / 10) > 0) {
//         currentSum = generateNewSum(currentSum);
//     }

//      return currentSum;

const cheeze = (number) => {
  return number === 0 ? 0 : 1 + (number - 1) % 9;
}
console.log(addDigits(12));
console.log(addDigits(21));
console.log(addDigits(38));
console.log(addDigits(19));
console.log(addDigits(119));
console.log(addDigitsAgain(19));
console.log(addDigitsAgain(119));
console.log(oneLastTime(119));
// console.log(oneLastTime(38));

console.log(119 % 9)
console.log(38 % 9)
console.log(19 % 9)
console.log(18 % 9)
console.log( 81 % 9)
console.log(90 % 9)
console.log(9999 % 9)
console.log(addDigits(9999));
console.log(addDigits(81));
console.log(addDigits(18));

console.log(cheeze(9999));
console.log(cheeze(38));
console.log(cheeze(12));
console.log(cheeze(19));
console.log(cheeze(21));
console.log(cheeze(8));

console.log(1 + (9999 - 1) % 9)
