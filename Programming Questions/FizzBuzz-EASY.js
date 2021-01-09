const fizzBuzz = n => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 15 === 0:
        result.push('FizzBuzz');
        break;
      case i % 5 === 0:
        result.push('Buzz');
        break;
      case i % 3 === 0:
        result.push('Fizz');
        break;
      default:
        result.push(i.toString());
        break;
    }
  }
  return result;
};

console.log(fizzBuzz(15));
