// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains
// the most water.

// Notice that you may not slant the container.

// Example 1:Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Example 3:
// Input: height = [4,3,2,1,4]
// Output: 16

// Example 4:
// Input: height = [1,2,1]
// Output: 2

// Constraints:
// n == height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104




// Maybe we can use a two-pointer approach (sliding window), the lower
// value of the two pointers determines the max water cell value, the
// number of water cells is rightIndex - leftIndex, total water is
// number of cells * max water cell value. We increment left if it is
// the lower of the two container walls or decrement right if the opposite
// is true

const maximumWaterContainer = array => {
  let left = 0;
  let right = array.length - 1;
  let currentWaterValue = 0;

  const calculateWaterValue = (left, right) => {
    // const waterValue = Math.min(array[left], array[right]) * (right - left);
    // currentWaterValue = currentWaterValue < waterValue ? waterValue : currentWaterValue;
    currentWaterValue = Math.max(currentWaterValue, Math.min(array[left], array[right]) * (right - left));
  }

  calculateWaterValue(left, right);

  while (left < right) {
    if (array[left] <= array[right]) {
      left++;
      calculateWaterValue(left, right);
    } else {
      right--;
      calculateWaterValue(left, right);
    }
  }

  return currentWaterValue;
}

const maximumWaterContainerAgain = array => {
  let left = 0;
  let right = array.length - 1;
  let currentWaterValue = 0;

  while (left < right) {
    currentWaterValue = Math.max(currentWaterValue, Math.min(array[left], array[right]) * (right - left));
    if (array[left] <= array[right]) left++;
    else right--;
  }
  return currentWaterValue;
}

console.log(maximumWaterContainer([1,8,6,2,5,4,8,3,7]));
console.log(maximumWaterContainer([1, 1]));
console.log(maximumWaterContainer([4, 3, 2, 1, 4]));
console.log(maximumWaterContainer([1, 2, 1]));

console.log(maximumWaterContainerAgain([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maximumWaterContainerAgain([1, 1]));
console.log(maximumWaterContainerAgain([4, 3, 2, 1, 4]));
console.log(maximumWaterContainerAgain([1, 2, 1]));
