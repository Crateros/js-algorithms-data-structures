// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Follow up: Could you solve it without converting the integer to a string?

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

const palindromeString = number => {
  return parseInt(number.toString().split('').reverse().join('')) === number;
};

const palindromeNumber = number => {
  if (number === 0) return true;
  let clone = number;
  let remainder = 0;
  let reverse = 0;

  // 1. Remove digits from original number via % operator using base 10 division
  // 2. Add those numbers to reverse and multiply by 10 to rebuild original
  // number as its reversed counterpart
  while (number > 0) {
    // Get remainder by extracting tail digit from number
    remainder = number % 10;
    // Mutate number by removing tail digit
    number = Math.floor(number / 10);
    // Build reverse number by multiplying reverse by 10 and adding current remainder
    reverse = reverse * 10 + remainder;
  }

  return clone === reverse;
};

const palindromeNumberAgain = number => {
  if (number === 0) return true;
  if (number < 0 || number % 10 === 0) return false;
  let remainder = 0;
  let clone = number;
  let reverse = 0;

  while (number > 0) {
    remainder = number % 10;
    number = Math.floor(number / 10);
    reverse = reverse * 10 + remainder;
  }

  return reverse === clone;
};

// You can use the same method as above but instead of iterating over the entire number
// and flipping all of the digits you can just flip half of the digits and do a comparison.
// If you have an odd number of digits in the original integer you will have to divide
// your final answer by 10 before doing the comparison, which is fine since both the
// normal and reversed values will share the common middle digit.

const shorterSolution = number => {
  if (number === 0) return true;
  if (number < 0 || number % 10 === 0) return false;
  let reversed = 0;

  while (reversed < number) {
    console.log(reversed);
    console.log(number);
    let remainder = number % 10;
    number = Math.floor(number / 10);
    reversed = reversed * 10 + remainder;
  }

  // Second check negates the middle digit for an odd number of integers
  return number === reversed || number === Math.floor(reversed / 10);
};

console.log(palindromeString(123));
console.log(palindromeString(12321));
console.log(palindromeString(121212121));
console.log(palindromeString(0));
console.log(palindromeString(-121));
console.log(palindromeString(122112121));

console.log(palindromeNumber(123));
console.log(palindromeNumber(12321));
console.log(palindromeNumber(121212121));
console.log(palindromeNumber(0));
console.log(palindromeNumber(-121));
console.log(palindromeNumber(122112121));

console.log(palindromeNumberAgain(123));
console.log(palindromeNumberAgain(12321));
console.log(palindromeNumberAgain(121212121));
console.log(palindromeNumberAgain(0));
console.log(palindromeNumberAgain(-121));
console.log(palindromeNumberAgain(122112121));

console.log(shorterSolution(123));
console.log(shorterSolution(12321));
console.log(shorterSolution(121212121));
console.log(shorterSolution(0));
console.log(shorterSolution(-121));
console.log(shorterSolution(122112121));
