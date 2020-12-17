// Given an array [A] and a number X, find two items in [A]
// with the closest possible sum of X.

const calculateNearestSum = (array, target) => {
  const sortedArray = array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    let left = sortedArray[leftPointer];
    let right = sortedArray[rightPointer];
    let currentSum = left + right;
    let delta = Math.abs(total - currentSum);

    // Target sum found
    if (currentSum === target) {
      const sum = [left, right];
      return sum;
    } else if (currentSum > target && Math.abs(total - currentSum) > delta) {
      // Sum > target, shift rightPointer to the left
      rightPointer--;
    } else if (currentSum < target) {
      // Sum < target, shift leftPointer to the right
      leftPointer++;
    }
  }

  return false;
};

console.log(calculateNearest([5, 3, 7, 8, 5, 5, 5, 9, 11, 6], 99));
