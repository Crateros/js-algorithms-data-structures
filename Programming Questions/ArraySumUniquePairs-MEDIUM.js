// Given an int array nums and an int target, find how many unique pairs in
// the array such that their sum is equal to target. Return the number of pairs.

// Example 1:
// Input: nums = [1, 1, 2, 45, 46, 46], target = 47
// Output: 2
// Explanation:
// 1 + 46 = 47
// 2 + 45 = 47

// Example 2:
// Input: nums = [1, 1], target = 2
// Output: 1
// Explanation:
// 1 + 1 = 2

// Example 3:
// Input: nums = [1, 5, 1, 5], target = 6
// Output: 1
// Explanation:
// [1, 5] and [5, 1] are considered the same.

const uniqueSumPairs = (array, target) => {
  const sorted = array.sort((a, b) => a - b);
  const set = new Set;
  let i = 0;
  let j = array.length - 1;
  let result = 0;
  while (i < j) {
    let sum = sorted[i] + sorted[j];
    if (sum === target) {
      if (!set.has(sorted[i]) && !set.has(sorted[j])) {
        set.add(sorted[i]).add(sorted[j]);
        result++;
      }
      i++;
      j--;
    }
    else sum < target ? i++ : j--;
  }
  return result;
}

console.log(uniqueSumPairs([1, 1, 2, 45, 45, 2, 46, 46], 47));
console.log(uniqueSumPairs([1, 5, 1, 5, 3, 3], 6));
console.log(uniqueSumPairs([1, 1], 2));
console.log(uniqueSumPairs([1, 1, 2, 23, 24, 24, 23, 1, 46, 2, 45, 2, 1, 45, 46, 45, 46, 46], 47));

