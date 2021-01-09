// End Zero Array: Given an array of numbers shift all indexes with a value of 0
// to the right most indexes in the array: [1, 2, 0, 0, 5, 0] becomes [1, 2, 5, 0, 0, 0]

const shiftZeroArray = array => {
  let filtered = array.filter(value => value !== 0);
  return [...filtered, ...new Array(array.length - filtered.length).fill(0)];
};

const shiftZeroes = array => [
  ...array.filter(n => n !== 0),
  ...new Array(array.length - array.filter(n => n !== 0).length).fill(0),
];

const shiftZeroesInPlace = array => {
  let nonZeroIndex = 0;
  // Iterate through array, look for non-zero values,
  // when found place non-zero value at nonZeroIndex
  // and increment index.
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) array[nonZeroIndex++] = array[i];
  }
  // The array is now missing zeroes or has duplicate non-zero
  // entries, overwrite them with zero starting at nonZeroIndex + 1;
  for (let i = nonZeroIndex; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
};

console.log(shiftZeroArray([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroArray([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroes([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroes([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroesInPlace([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroesInPlace([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));
