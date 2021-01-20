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
  // and increment nonZeroIndex.
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) array[nonZeroIndex++] = array[i];
  }
  // The array is now missing zeroes or has duplicate non-zero
  // entries, overwrite them with zeroes starting at nonZeroIndex;
  for (let i = nonZeroIndex; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
};

const shiftZeroInPlaceAgain = a => {
  let nonZeroIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) a[nonZeroIndex++] = a[i];
    console.log(a, nonZeroIndex);
  }
  for (let i = nonZeroIndex; i < a.length; i++) {
    a[i] = 0;
  }
  return a;
};

const shiftZeroInPlaceOnceMore = array => {
  let nonZeroPointer = 0;
  const length = array.length
  for (let i = 0; i < length; i++) {
    // Since zero is falsy we can just check
    //for array[i]
    if (array[i]) {
      array[nonZeroPointer++] = array[i]
    }
  }
  for (let i = nonZeroPointer; i < length; i++) {
    array[i] = 0;
  }
  return array;
}

console.log(shiftZeroArray([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroArray([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroes([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroes([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroesInPlace([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroesInPlace([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroInPlaceAgain([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroInPlaceAgain([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));

console.log(shiftZeroInPlaceOnceMore([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroInPlaceOnceMore([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));
