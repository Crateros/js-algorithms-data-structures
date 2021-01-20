// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number
// I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

// Example 4:
// Input: n = 2, pick = 2
// Output: 2


// We can use binary search here to more efficiently find
// the number we are looking for since the numbers are in
// ascending order. We pass our mid point to guess to determine
// if we have found our number or not. This produces an O(Log n) time
// solution nd O(1) space solution.

const highOrLow = (numbers, target) => {
  if (numbers === target) return numbers;
  let low = 0;
  let high = numbers;

  const guess = (num, target) => {
    if (num === target) return 0;
    else if (num < target) return 1;
    else return -1;
  }

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (guess(mid, target) === 0) return mid;
    else if (guess(mid, target) === 1) low = mid;
    else high = mid;
  }
}

console.log(highOrLow(10, 6));
console.log(highOrLow(2, 1));
console.log(highOrLow(1, 1));
console.log(highOrLow(2, 2));
