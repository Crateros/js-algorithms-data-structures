// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

const calculateTotalWater = array => {
  if (array.length < 3) return 0;
  let totalWater = 0;
  let currentWaterLevel = 0;
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let currentMinHeight = array[array[left] < array[right] ? left++ : right--];
    currentWaterLevel = Math.max(currentWaterLevel, currentMinHeight);
    totalWater += currentWaterLevel - currentMinHeight;
  }

  return totalWater;
}

const calculateTotalWaterAgain = array => {
  let left = 0, right = array.length - 1;
  let leftMaxHeight = 0, rightMaxHeight = 0;
  let totalWater = 0

  while (left < right) {
    if (array[left] < array[right]) {
      // 1. Calculate current maxLeftHeight by comparing current MAX height (left)
      // against current left height
      leftMaxHeight = Math.max(leftMaxHeight, array[left]);
      // 2. Calculate current column water level by subtracting the current height
      // from the current max height and add it to total water
      totalWater += leftMaxHeight - array[left];
      // 3. Increment left pointer (collapsing in)
      left++;
    } else {
      // 1. Calculate current maxRightHeight by comparing current MAX height (right)
      // against current right height and add it to total water
      rightMaxHeight = Math.max(rightMaxHeight, array[right]);
      // 2. Calculate current column water level by subtracting the current height from
      // the current max height and add it to total water
      totalWater += rightMaxHeight - array[right];
      // 3. Decrement right pointer (collapsing in)
      right--;
    }
  }

  return totalWater;
}

console.log(calculateTotalWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(calculateTotalWaterAgain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));