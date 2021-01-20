// Given an array of integers that is already sorted in ascending order,
// find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target,
// where index1 must be less than index2.

// Note:
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]

const twoSum2 = (array, k) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === k) return [left + 1, right + 1];
    else if (sum < k) left++;
    else right--;
  }
}

// while (left < right) {
//   let sum = array[left] + array[right];
//   if (sum === k) return [left + 1, right + 1];
//   sum < k ? left++ : right--
// }

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([2, 3, 4], 6));
console.log(twoSum2([-1, 0], -1));
