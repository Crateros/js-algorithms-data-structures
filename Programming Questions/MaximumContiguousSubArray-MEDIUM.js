// You are given a one dimensional array that may contain both positive and negative integers,
// find the sum of contiguous subarray of numbers which has the largest sum.
// For example, if the given array is {-2, -5, 6, -2, -3, 1, 5, -6},
// then the maximum subarray sum is 7 (see highlighted elements).

// As we traverse the array we build up a subarray sum.
// We need to calculate the max between 2 scenarios:
// 1.) Continuing our current running subarray by adding the new index value
// 2.) Start a new running subarray sum starting with the new index value
// max(new item value, existing sum + new item value)

// This is known as Kadane's algorithm

const maxSubSum = array => {
  let maxSum = (subArraySum = array[0]);

  for (let i = 1; i < array.length; i++) {
    subArraySum = Math.max(array[i], subArraySum + array[i]);
    if (subArraySum > maxSum) maxSum = subArraySum;
  }
  return maxSum;
};

const testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const testArrayTwo = [-2, -5, 6, -2, -3, 1, 5, -6];

console.log(maxSubSum(testArray));
console.log(maxSubSum(testArrayTwo));
