// Given an array nums of n integers, are there elements a, b, c
// in nums such that a + b + c = 0? Find all unique triplets in the
// array which gives the sum of zero. Notice that the solution set must
// not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Constraints:
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

const threeSum = array => {
  const total = 3;
  const hash = new Map();
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (hash.has(array[i])) result.push(hash.get(array[i]), i);
    hash.set(total - array[i], i);
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));