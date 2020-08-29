// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

// Left and right pointers that collaps in on the center of the array looking for possible
// target sum combinations

const twoSumSorted = (array, target) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let currentSum = array[leftIndex] + array[rightIndex];

    if (currentSum === target) return [leftIndex + 1, rightIndex + 1];
    else if (currentSum < target) leftIndex++;
    else if (currentSum > target) rightIndex--;
  }

  return false;
};

const testArray = [2, 7, 11, 15];
console.log(twoSumSorted(testArray, 9));
console.log(twoSumSorted(testArray, 99));
console.log(twoSumSorted(testArray, 18));
