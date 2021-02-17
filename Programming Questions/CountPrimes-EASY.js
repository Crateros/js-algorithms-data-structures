
// Count the number of prime numbers less than a non-negative number, n.
// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

const countPrimes = (number) => {
  if (number < 2) return 0;
  let primes = 0;

  // Since a number cannot possible be evenly divisible
  // by anything more than half its value we can exclude any
  // iterations that would involve j > √(number) which means
  // j^2 <= number, this cuts our iterations by ~1/2
  function isPrime(number) {
    for (let j = 2; j*j <= number; j++) {
      if (number % j === 0) return false;
    }
    return true;
  }

  for (let i = 2; i < number; i++) {
    isPrime(i) ? primes++ : null;
  }

  return primes;
}

const countPrimesFaster = number => {
  if (number < 3) return 0;
  // We begin with an array that assumes all numbers
  // are prime
  let primeArray = new Array(number).fill(true);

  // Loop through primeArray and begin marking multiples
  // as false up to i^2 < primeArray.length (number) since
  // we do not need to consider permutations of multiples
  // i.e. if we have already considered 2x6 we do not need
  // to also consider 6x2 (for multiples of 12). The largest
  // that one of the factors can possible be is <= √number. So we could
  // say while i < √number but the Math.sqrt function is costly
  // so instead we use algebra, ^2 both sides, and no we have
  // i^2 < number or i*i < number, this keeps us from checking
  // factors that would exceed the current number.
  for (let i = 2; i * i < number; i++) {
    // If we encounter a value currently marked as a prime (true)
    // lets flip all of its multiples to false
    if (primeArray[i]) {
      for (let j = i; i * j < number; j++) {
        primeArray[i * j] = false;
      }
    }
  }

  // We now have an array containing all of our prime numbers
  // that were not removed via the detection of multiples, we can
  // filter for true values and return the length. Important to note
  // that this technically includes 0 and 1 and the array so the total length
  // should be -2 to account for these non-prime true values
  return primeArray.filter(prime => prime).length - 2;
}

const oneMoreTime = (number) => {
  if (number < 3) return 0;
  const arr = new Uint8Array(number);

  for (let i = 2; i * i < number; i++) {
    if (!arr[1]) {
      for (let j = i; i * j < number; j++) {
        arr[i * j] = 1;
      }
    }
  }
  return arr.filter(n => !n).length - 2;
}

const countingPrimesAgain = (number) => {
  if (number < 3) return 0;
  const primes = new Uint8Array(number);

  for (let i = 2; i * i < number; i++) {
    if (primes[i] !== 1) {
      for (let j = i; i * j < number; j++) {
        primes[i * j] = 1;
      }
    }
  }
  return primes.filter(prime => !prime).length - 2;
}

console.log(countPrimes(10));
console.log(countPrimes(99));
console.log(countPrimes(1));
console.log(countPrimes(0));
console.log(countPrimes(499979));

console.log(countPrimesFaster(10));
console.log(countPrimesFaster(99));
console.log(countPrimesFaster(1));
console.log(countPrimesFaster(0));
console.log(countPrimes(499979));

console.log(oneMoreTime(10));
console.log(oneMoreTime(99));
console.log(oneMoreTime(1));
console.log(oneMoreTime(0));

console.log(countingPrimesAgain(10));
console.log(countingPrimesAgain(99));
console.log(countingPrimesAgain(1));
console.log(countingPrimesAgain(499979));

