// Fibonacci sequence (recursive) - Time complexity Analysis

//Recursive time complexity O(2^n)
function fibonacciRecurse(value) {
  if (value <= 1) {
    return 1;
  }
  else {
    return fibonacci(value - 1) + fibonacci(value - 2);
  }
}

//Iterative time complexity O(n) via memoization

function fibonacciLoop(value) {
  if (value < 1) return value;
  let a = 0;
  let b = 1;
  for (let i = 1; i < value; i++) {
    let fibSum = a + b;
    a = b;
    b = fibSum;
  }
  return b;
}

console.log(fibonacciLoop(5));

var fib = function(n) {
  // const goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5));
};

const fastFib = (index) => {
  if (index === 0) return 0;
  let a = 0;
  let b = 1;

  for (let i = 0; i < index; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }

  return b;
}

console.log(fastFib(1))