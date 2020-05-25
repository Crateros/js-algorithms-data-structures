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

//Iterative time complexity O(n)

function fibonacciLoop(value) {
  if (value <= 1) {
    return 1;
  }
  else {
    let a = 0;
    let b = 1;
    var result = b;
    for (let i = 1; i < value; i++) {
      result = a + b;
      a = b;
      b = result;
    }
  }
  return result
}
