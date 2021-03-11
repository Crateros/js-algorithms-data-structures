// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
// appear twice and others appear once. Find all the elements that appear
// twice in this array. Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]);
    if (nums[index - 1] < 0) result.push(index);
    nums[index - 1] *= -1;
  }
  return result;
};

var findDuplicatesAgain = function(nums) {
  const result = [];
  for (let i = 0, length = nums.length; i < length; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) result.push(idx + 1);
    else nums[idx] = -nums[idx];
  }
  return result;
};

const findDuplicatesSet = array => {
  const set = new Set;
  const result = [];
  for (let i = 0, length = array.length; i < length; i++) {
    set.has(array[i]) ? result.push(array[i]) : set.add(a[i]);
  }
  return result;
}


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));