// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target. You may assume that each
// input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (a, k) => {
  const map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) return [map.get(a[i]), i];
    map.set(k - a[i], i);
  }
};

const twoSumAgain = (a, k) => {
  const hash = new Map();
  const result = [];
  a.map((n, i) => {
    hash.has(n) ? result.push(hash.get(n), i) : null;
    hash.set(k - n, i);
  });
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 30));
console.log(twoSum([2, 7, 12, 12], 24));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

console.log(twoSumAgain([2, 7, 11, 15], 9));
console.log(twoSumAgain([2, 7, 11, 15], 30));
console.log(twoSumAgain([2, 7, 12, 12], 24));
console.log(twoSumAgain([3, 2, 4], 6));
console.log(twoSumAgain([3, 3], 6));
