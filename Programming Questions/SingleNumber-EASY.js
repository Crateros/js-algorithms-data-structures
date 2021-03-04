// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without
// using extra memory?

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1



// Could use a set to keep track of unique values, remove duplicates from set,
// only value left in set will be non-repeated number

const singleNumber = nums => {
  const set = new Set;
  for (let i = 0; i < nums.length; i++) {
    set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
  }
  return set.values().next().value;
}

// Can also use the XOR operator (^=) since x ^ x = 0,
// x ^ y ^ x ^ y ^ z = z

const singleNumberBitOperation = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum ^= nums[i];
  }

  return sum;
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));

console.log(singleNumberBitOperation([2, 2, 1]));
console.log(singleNumberBitOperation([4, 1, 2, 1, 2]));
console.log(singleNumberBitOperation([1]));