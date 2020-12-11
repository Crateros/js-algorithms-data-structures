// Given the array numbers consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: numbers = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Example 2:
// Input: numbers = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Example 3:
// Input: numbers = [1,1,2,2], n = 2
// Output: [1,2,1,2]

const shuffleArray = (array, split) => {
  const output = new Array(array.length);
  const left = array.slice(0, split);
  const right = array.slice(split, array.length);
  for (let i = 0; i < array.length; i++) {
    output[i] = i % 2 === 0 ? left.shift() : right.shift();
  }
  return output
};

const shuffleArrayTwo = (array, split) => {
  const output = [];
  for (let i = 0; i < split; i++) {
    output.push(array[i], array[i + split]);
  }
  return output;
};

console.log(shuffleArray([2,5,1,3,4,7], 3));
console.log(shuffleArray([1,2,3,4,4,3,2,1], 4));
console.log(shuffleArray([1,1,2,2], 2));

console.log(shuffleArrayTwo([2,5,1,3,4,7], 3));
console.log(shuffleArrayTwo([1,2,3,4,4,3,2,1], 4));
console.log(shuffleArrayTwo([1,1,2,2], 2));