// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with
// uniform probability, implement a function rand7() that returns an
// integer from 1 to 7 (inclusive).

const rand5 = () => Math.floor(Math.random() * 5) + 1;

// This will produce a bell curve
// const rand7 = () => rand5() + (Math.ceil(Math.random() * 3) - 1);
const rand7 = () => rand5() * (7 / 5);

// Dart board to pick random number between 1 - 7 uniform distribution
const rand7Uniform = () => {
  let result = 0;
  const options = [[1, 2, 3, 4, 5], [6, 7, 1, 2, 3], [4, 5, 6, 7, 1], [2, 3, 4, 5, 6], [7, 0, 0, 0, 0]];

  while (result === 0) {
    let i = rand5();
    let j = rand5();
    result = options[i - 1][j - 1];
  }

  return result;
};

const arr = [];
const arrOne = [];
const arrTwo = [];
const count = [0, 0, 0, 0, 0, 0, 0];
const countOne = [0, 0, 0, 0, 0];
const countTwo = [0, 0, 0];

for (let i = 0; i < 1000000; i++) {
  arr.push(rand7Uniform());
}

// for (let j = 0; j < 100000; j++) {
//   arrOne.push(rand5());
// }

// for (let k = 0; k < 100000; k++) {
//   arrTwo.push(Math.ceil(Math.random() * 3) - 1);
// }

arr.sort((a, b) => a - b);
// arrOne.sort((a, b) => a - b);
// arrTwo.sort((a, b) => a - b);

arr.map(item => count[item - 1]++);
// arrOne.map(item => countOne[item - 1]++);
// arrTwo.map(item => countTwo[item]++);

console.log(count);
// console.log(countOne);
// console.log(countTwo);
console.log('Random: ', rand7Uniform());
