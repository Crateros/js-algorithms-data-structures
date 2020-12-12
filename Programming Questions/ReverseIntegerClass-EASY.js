// Reverse an integer
// 123 -> 321
// -123 --> -321

class IntegerHelper {
  constructor(integer) {
    this.integer = integer;
    this.isNegative = this.integer > -1 ? 1 : -1;
  }

  reverseIntegerString() {
    return parseInt(this.integer.toString().split('').reverse().join('')) * this.isNegative;
  }

  reverseIntegerMath() {
    let clone = this.integer * this.isNegative;
    let remainder = 0;
    let reversed = 0;

    while (clone > 0) {
      remainder = clone % 10;
      clone = Math.floor(clone / 10);
      reversed = reversed * 10 + remainder;
    }

    return reversed * this.isNegative;
  }
}

const integerOne = new IntegerHelper(321);
console.log(integerOne.reverseIntegerString());
console.log(integerOne.reverseIntegerMath());

const integerTwo = new IntegerHelper(32123);
console.log(integerTwo.reverseIntegerString());
console.log(integerTwo.reverseIntegerMath());

const integerThree = new IntegerHelper(-123);
console.log(integerThree.reverseIntegerString());
console.log(integerThree.reverseIntegerMath());

const integerFour = new IntegerHelper(0);
console.log(integerFour.reverseIntegerString());
console.log(integerFour.reverseIntegerMath());
