// Given an array A of unsorted integers (positive and negative) and an integer K,
// return the total number of continuous subarrays whose sum equals k.

// Example 1:
// Input: a = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: a = [1,2,3], k = 3
// Output: 2

// We can use a hashmap that keeps a running total of all of the continuous sums
// throughout the array. Every time we encounter a sum we do the following:
// 1. Determine if the compliment of the current sum and k already exists in the hashmap,
// if so increase the solution count by the number of times that compliment has already appeared
// 2. Increment the current sum occurrence (if it already exists) or add the
// current sum entry to the hashmap

const sumOccurrence = (a, k) => {
  let sum = 0;
  let count = 0;
  const map = new Map([[0, 1]]);
  a.map(n => {
    sum += n;
    map.get(sum - k) ? (count += map.get(sum - k)) : null;
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  });

  return count;
};

const sumArrayOccurrence = (a, k) => {
  let sum = 0;
  let count = 0;
  const map = new Map([[0, 1]]);

  a.map(n => {
    sum += n;
    map.has(sum - k) ? (count += map.get(sum - k)) : null;
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  });

  return count;
};

const oneMoreTime = (a, k) => {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    map.has(sum - k) ? (count += map.get(sum - k)) : null;
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }

  return count;
};

console.log(sumOccurrence([1, 1, 1], 2));
console.log(sumOccurrence([3, 4, 7, 2, -3, 1, 4, 2], 7));
console.log(sumOccurrence([-1, -1, 1], 0));
console.log(sumOccurrence([1], 0));
console.log(sumOccurrence([1, -1, 0], -1));

console.log(sumArrayOccurrence([1, 1, 1], 2));
console.log(sumArrayOccurrence([3, 4, 7, 2, -3, 1, 4, 2], 7));
console.log(sumArrayOccurrence([-1, -1, 1], 0));
console.log(sumArrayOccurrence([1], 0));
console.log(sumArrayOccurrence([1, -1, 0], 0));

console.log(oneMoreTime([1, 1, 1], 2));
console.log(oneMoreTime([3, 4, 7, 2, -3, 1, 4, 2], -2));
console.log(oneMoreTime([-1, -1, 1], 0));
console.log(oneMoreTime([1], 0));
console.log(oneMoreTime([1, -1, 0], 0));
