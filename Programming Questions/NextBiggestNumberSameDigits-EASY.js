// Create a function that takes a positive integer and returns
// the next bigger number that can be formed by rearranging its digits.

// For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   returns 21
// nextBigger(num: 513)  returns 531
// nextBigger(num: 2017) returns 2071

// If the digits can't be rearranged to form a bigger number, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// const nextBiggestNumber = (number) => {
//   if (number < 12) return -1;

//   console.log(12 % 10)
//   console.log(Math.floor(12 % 100 / 10));
//   let divisor = 10;
//   const remainder = number % divisor;
//   const base = Math.floor(number % divisor**2 / divisor);
//   let current = base * divisor + remainder;
//   let proposed = remainder * divisor + base;
//   console.log(current, proposed)
//   if (proposed > current) {
//     return number + proposed - current;
//   }
//   return -1
// }

const nextBiggestNumber = (number) => {
  if (number < 12) return -1;

  let divisor = 10;

  while (Math.floor(number / divisor) > 0) {
    let base = Math.floor(number % divisor ** 2 / divisor);
    let remainder = number % divisor;
    let current = base * divisor + remainder;
    let proposed = remainder * divisor + base;

    if (proposed > current) {
      return number + proposed - current;
    }
    divisor **= 2;
  }

  return -1;
}

const easyMode = (number) => {
  const arr = number.toString().split('');

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
      return parseInt(arr.join(''));
    }
  }
  return -1;
}

console.log(nextBiggestNumber(272));
// console.log(nextBiggestNumber(121));
// console.log(nextBiggestNumber(55));
console.log(nextBiggestNumber(45));
// console.log(nextBiggestNumber(66));
// console.log(nextBiggestNumber(121));

console.log(easyMode(45));
console.log(easyMode(66));
console.log(easyMode(12));
console.log(easyMode(19));
console.log(easyMode(109));
console.log(easyMode(272));


