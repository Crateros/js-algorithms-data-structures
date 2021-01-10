// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
// which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:
// Input: num = 3
// Output: "III"

// Example 2:
// Input: num = 4
// Output: "IV"

// Example 3:
// Input: num = 9
// Output: "IX"

// Example 4:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 5:
// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// ****** 1 <= num <= 3999 ******

const intToRoman = n => {
  const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const values = [1000, 500, 100, 50, 10, 5, 1];
  let index = 0;
  let result = '';

  constructRomanNumeral = (iterations, char) => {
    for (let i = 0; i < iterations; i++) {
      result += char;
    }
  };

  while (n > 0) {
    let quotient = Math.floor(n / values[index]);

    if (quotient > 0) {
      if (quotient === 4) {
        // Handle quotient of 4
        romanNumeral = romanNumerals[index] + romanNumerals[index - 1];
        constructRomanNumeral(1, romanNumeral);
        n -= values[index] * 4;
      } else if (Math.floor(n / values[index + 1]) === 9) {
        // Handle quotient of 9
        romanNumeral = romanNumerals[index + 1] + romanNumerals[index - 1];
        constructRomanNumeral(1, romanNumeral);
        n -= values[index + 1] * 9;
      } else {
        // Handle the rest
        romanNumeral = romanNumerals[index];
        constructRomanNumeral(quotient, romanNumeral);
        n -= quotient * values[index];
      }
    }

    index++;
  }

  return result;
};

const intToRomanAgain = n => {
  const rs = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const vs = [1000, 500, 100, 50, 10, 5, 1];
  let idx = 0;
  let result = '';

  const constructResult = (n, r) => {
    for (let i = 0; i < n; i++) {
      result += r;
    }
  };

  while (n > 0) {
    let q = Math.floor(n / vs[idx]);
    if (q > 0) {
      let d = q * vs[idx];
      let r = rs[idx];
      let i = q;
      if (q === 4) {
        r = rs[idx] + rs[idx - 1];
        d = vs[idx] * 4;
        i = 1;
      } else if (Math.floor(n / vs[idx + 1]) === 9) {
        r = rs[idx + 1] + rs[idx - 1];
        d = vs[idx + 1] * 9;
        i = 1;
      }
      constructResult(i, r);
      n -= d;
    }
    idx++;
  }
  return result;
};

console.log(intToRoman(3));
console.log(intToRoman(13));
console.log(intToRoman(500));
console.log(intToRoman(3800));
console.log(intToRoman(58));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(45));
console.log(intToRoman(400));
console.log(intToRoman(900));
console.log(intToRoman(1994));
console.log(intToRoman(99));

console.log(intToRomanAgain(3));
console.log(intToRomanAgain(13));
console.log(intToRomanAgain(500));
console.log(intToRomanAgain(3800));
console.log(intToRomanAgain(58));
console.log(intToRomanAgain(4));
console.log(intToRomanAgain(9));
console.log(intToRomanAgain(45));
console.log(intToRomanAgain(400));
console.log(intToRomanAgain(900));
console.log(intToRomanAgain(1994));
console.log(intToRomanAgain(99));
