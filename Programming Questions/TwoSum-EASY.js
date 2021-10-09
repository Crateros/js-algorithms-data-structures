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

// We use a map data structure, when we encounter a value we push
// the compliment of that value and the target to the map along with
// the current index { key: value } = {target - array[i]: i}.
// At each iteration of the loop we first ask if the map currently has
// a[i], if it does it means we already found the sum. If our target is 9
// and we encounter a 2 and we see that a 2 is already in our map then it
// means that we have already encountered a 7 since 9 -  7 = 2. So if a 2
// already exists in our map then 7 exists in our array. We would then return
// map.get(a[i], i) (our compliments index, our current index).

//[1,2,3,4,5]

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

const twoSumOnceMore = (a, k) => {
  const map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) return [map.get(a[i]), i];
    map.set(k - a[i], i);
  }
  return [];
};

// You can also flip the order so that you are storing the value itself
// in the map and checking for the pre-existence of the compliment
const twoSumDifferent = (a, k) => {
  const map = new Map;
  for (let i = 0; i < a.length; i++) {
    if (map.has(k - a[i])) return [map.get(k - a[i]), i];
    map.set(a[i], i);
  }
  return [];
}

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

console.log(twoSumOnceMore([2, 7, 11, 15], 9));
console.log(twoSumOnceMore([2, 7, 11, 15], 30));
console.log(twoSumOnceMore([2, 7, 12, 12], 24));
console.log(twoSumOnceMore([3, 2, 4], 6));
console.log(twoSumOnceMore([3, 3], 6));

console.log(twoSumDifferent([2, 7, 11, 15], 9));
console.log(twoSumDifferent([2, 7, 11, 15], 30));
console.log(twoSumDifferent([2, 7, 12, 12], 24));
console.log(twoSumDifferent([3, 2, 4], 6));
console.log(twoSumDifferent([3, 3], 6));

