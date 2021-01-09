// Given an array [A] and a number X, check for pair in [A] with sum X.
// If no possible X sum exists return false.

const calculateSum = (array, target) => {
  const sortedArray = array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    let left = sortedArray[leftPointer];
    let right = sortedArray[rightPointer];
    let currentSum = left + right;

    // Target sum found
    if (currentSum === target) {
      const sum = [left, right];
      return sum;
    } else if (currentSum > target) {
      // Sum > target, shift rightPointer to the left
      rightPointer--;
    } else if (currentSum < target) {
      // Sum < target, shift leftPointer to the right
      leftPointer++;
    }
  }

  return false;
};

const calculateSumHash = (a, k) => {
  const hash = new Map();
  for (let i = 0; i < a.length; i++) {
    if (hash.has(a[i])) return [hash.get(a[i]), i];
    hash.set(k - a[i], i);
  }
  return false;
};

console.log(calculateSum([5, 3, 7, 8, 5, 5, 5, 9, 11, 6], 17));
console.log(calculateSumHash([5, 3, 7, 8, 5, 5, 5, 9, 11, 6], 17));
