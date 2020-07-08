// Given an array of size n containing integers find the length of the
// longest contiguous sub-array that sums to k.

// Examples:
// Input: [ 10, 5, 2, 7, 1, 9 ], k = 15
// Output: 4
// The sub-array is [5, 2, 7, 1]

// Input: [-5, 8, -14, 2, 4, 12], k = -5
// Output: 5

const findLongestSubArray = (a, k) => {
  let sum = a[0];
  let i = 0;
  let j = 0;
  let longest = 0;

  while (j < a.length) {
    // Target sum found, log distance and keep incremeneting j to see if it can be extended
    if (sum === k) {
      let length = j - i + 1;
      if (length > longest) longest = length;
      j++;
      sum += a[j];
    } else if (sum < k) {
      // If current sum is less than target, increase our range
      // by incrementing j and recalculating sum
      j++;
      sum += a[j];
    } else {
      // If current sum is greater than target, recalculate sum by
      // removing element at a[i] from sum then increment i
      sum -= a[i];
      i++;
    }
  }

  return longest > 0 ? longest : -1;
};

const a = [1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10];
const k = 15;
console.log(findLongestSubArray(a, k));
