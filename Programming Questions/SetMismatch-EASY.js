// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated to another
// number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
// Input: nums = [1, 2, 2, 4]
// Output: [2, 3]

// Example 2:
// Input: nums = [1, 1]
// Output: [1, 2]

// Example 3:
// Input: nums = [2, 2]
// Output: [2, 1]

// Example 4:
// Input: nums = [3, 2, 3]
// Output: [3, 1]

var findErrorNums = function(nums) {
  // Find the series sum using (length * (first element + last element)) / 2
  const targetSum = (nums.length * (1 + nums.length)) / 2;
  // Frequency map
  const map = new Map();
  // Sum to track nums sum
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Keep track of duplicate
    if (map.has(nums[i])) var duplicate = nums[i];
    else map.set(nums[i], 1);
    // Keep track of running sum
    sum += nums[i];
  }

  // Return the duplicate and the 
  return [duplicate, duplicate + targetSum - sum];
};

// You could also use 2 sets, 1 to find the duplicate, and the other to add 1...n numbers
// and compare against the original set to find the missing value