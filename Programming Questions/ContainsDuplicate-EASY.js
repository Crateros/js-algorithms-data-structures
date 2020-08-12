// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = array => {
  const set = new Set(array);
  if (set.size !== array.length) return true;
  return false;
};

const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));
