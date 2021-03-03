// Given an array numbers of n integers, are there elements a, b, c
// in numbers such that a + b + c = 0? Find all unique triplets in the
// array which gives the sum of zero. Notice that the solution set must
// not contain duplicate triplets.

// Example 1:
// Input: numbers = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: numbers = []
// Output: []

// Example 3:
// Input: numbers = [0]
// Output: []

// Constraints:
// 0 <= numbers.length <= 3000
// -105 <= numbers[i] <= 105



// We can start by sorting the array, this allows us to potentially
// skip over duplicate values being in the same position so that all of
// the triplets we find are unique. Once the array is sorted we can then
// hold one variable constant and treat the rest of the array as a TwoSum
// problem where we use a sliding window via left and right pointers to find
// b + c = target - a.

const threeSum = array => {
  const sorted = array.sort((a,b) => a - b);
  let result = [];

  // Loop through array, holding A position
  for (let i = 0; i < sorted.length - 2; i++) {
    // Look back one index to see if we are comparing
    // duplicate A values
    if (i > 0 && sorted[i - 1] === sorted[i]) continue;
    let a = sorted[i];
    // Left pointer, always starts 1 ahead of A
    let b = i + 1;
    // Right pointer, always starts at end
    let c = sorted.length - 1;
    // Collapse pointers towards the center of
    // remaining array
    while (b < c) {
      let sum = a + sorted[b] + sorted[c];
      if (sum > 0) c--;
      else if (sum < 0) b++;
      else {
        // We found a triplet, add to result
        result.push([a, sorted[b], sorted[c]]);
        // Increase b to see if a duplicate triplet might occur
        b++
        // Continue incrementing b as long as previous b === b,
        // ensuring we skip over duplicate solutions
        while (sorted[b] === sorted[b - 1] && b < c) b++;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));

const threeSumAgain = a => {
  const sorted = a.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i - 1] === sorted[i]) continue;

    let a = sorted[i];
    let b = i + 1;
    let c = sorted.length - 1;

    while (b < c) {
      let sum = a + sorted[b] + sorted[c];
      if (sum > 0) c--;
      else if (sum < 0) b++;
      else {
        result.push([a, sorted[b], sorted[c]]);
        b++;
        while (b < c && sorted[b - 1] === sorted[b]) {
          b++;
        }
      }
    }
  }
  return result;
}

console.log(threeSumAgain([-1, 0, 1, 2, -1, -4]));
console.log(threeSumAgain([0, 0, 0, 0]));
