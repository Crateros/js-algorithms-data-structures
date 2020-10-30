// A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5],
// then the array would become [3, 4, 5, 1, 2].

// Given an array a of n integers and a number, d, perform d left rotations on the array.
// Return the updated array to be printed as a single line of space-separated integers.

const performLeftRotations = (a, d) => {
  let result = '';
  const normalized = d > a.length ? d % a.length : d;
  [...a.slice(normalized, a.length), ...a.slice(0, normalized)].forEach(e => {
    result += e + ' ';
  });
  return result;
};

const testArray = [1, 2, 3, 4, 5];
const testArrayTwo = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(performLeftRotations(testArray, 1));
console.log(performLeftRotations(testArray, 2));
console.log(performLeftRotations(testArray, 3));
console.log(performLeftRotations(testArray, 5));
console.log(performLeftRotations(testArray, 22));
console.log(performLeftRotations(testArray, 23));
console.log(performLeftRotations(testArrayTwo, 10));
console.log(performLeftRotations(testArray, 0));
