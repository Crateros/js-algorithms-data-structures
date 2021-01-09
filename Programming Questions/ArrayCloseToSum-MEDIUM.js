// Given an array [A] and a number X, find two items in [A]
// with the closest possible sum of X.

const calculateNearestSum = (array, target) => {
  const sorted = array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  let closest = sorted[left] + sorted[right];

  while (left < right) {
    let currentSum = sorted[left] + sorted[right];
    if (currentSum === target) return currentSum;
    if (Math.abs(target - currentSum) < Math.abs(target - closest)) closest = currentSum;
    currentSum < target ? left++ : right--;
  }
  return closest;
};

// const calculateNearestSumHash = (a, k) => {

// }

console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], 99));
console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], 0));
console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], -8));
console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], 12));
console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], 99));
console.log(calculateNearestSum([-5, -3, -7, -8, 5, 5, 5, 9, 11, 6], 18));
console.log(calculateNearestSum([-5, 12, -3, 4, -15, 6, 1], 2));
console.log(calculateNearestSum([2, 2, -1, 5, -3, -2], 7));
console.log(calculateNearestSum([2, 2, -1, 5, -3, -2], -2));
console.log(calculateNearestSum([1, 2, 3, 4, 5, 6], 25));
console.log(calculateNearestSum([1, 2, 3, 4, 5, 6], 6));
