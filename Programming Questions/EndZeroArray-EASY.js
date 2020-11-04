// End Zero Array: Given an array of numbers shift all indexes with a value of 0
// to the right most indexes in the array: [1, 2, 0, 0, 5, 0] becomes [1, 2, 5, 0, 0, 0]

const shiftZeroArray = array => {
  let filtered = array.filter(value => value !== 0);
  return [...filtered, ...new Array(array.length - filtered.length).fill(0)];
};

console.log(shiftZeroArray([1, 2, 0, 0, 5, 0]));
console.log(shiftZeroArray([1, 2, 0, 0, 5, 0, 7, 99, -124, 0, 5, 4, 0, 0, 0, 88, -98]));
