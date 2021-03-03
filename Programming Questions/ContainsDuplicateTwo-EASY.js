// Given an array of integers and an integer k, find out whether there are two distinct
// indices i and j in the array such that nums[i] = nums[j] and the absolute difference
// between i and j is at most k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

const containsDuplicateTwo = (nums, k) => {
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true;
    else map.set(nums[i], i);
  }
  return false;
}

console.log(containsDuplicateTwo([1, 2, 3, 1], 3));
console.log(containsDuplicateTwo([1, 0, 1, 1], 1));
console.log(containsDuplicateTwo([1, 2, 3, 1, 2, 3], 2));
console.log(containsDuplicateTwo([99, 99], 2));
console.log(containsDuplicateTwo([1, 99, 0, 5, 7, 98, 99, 1], 5));

