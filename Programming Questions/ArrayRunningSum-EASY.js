// Given an array numbers. We define a running sum of an array as runningSum[i] = sum(numbers[0]…numbers[i]).
// Return the running sum of numbers.

// Example 1:
// Input: numbers = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: numbers = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: numbers = [3,1,2,10,1]
// Output: [3,4,6,16,17]

const runningSum = array => {
  const output = [array[0]];

  for (let i = 1; i < array.length; i++) {
      output.push(output[i - 1] + array[i]);
  }

  return output;
}

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));