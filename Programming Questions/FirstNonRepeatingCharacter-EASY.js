// Given a string, find the first non-repeating character in it.
// For example, if the input string is “GeeksforGeeks”, then the output should be ‘f’
// and if the input string is “GeeksQuiz”, then the output should be ‘G’.

const findFirstNonRepeating = string => {
  let charMap = new Map();

  for (char of string) {
    if (charMap.has(char)) charMap.set(char, charMap.get(char) + 1);
    else charMap.set(char, 1);
  }

  for (let [char, value] of charMap) {
    if (value === 1) {
      return char;
    }
  }

  return 'All Repeats!';
};

const mapMethod = string => {
  const map = new Map();

  for (char of string) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }

  for (let [char, val] of map) {
    if (val === 1) return char;
  }

  return `No non-repeated chars in string "${string}, sorry!`;
};

const slickMethod = string => {
  for (char of string) {
    console.log(char);
    if (string.indexOf(char) === string.lastIndexOf(char)) return char;
  }
  return 'All Repeats!';
};

const findFirstNonRepeatingLoop = string => {
  // Turn the string into an array for iterating
  const stringArray = string.split('');

  // If we have an array with less than 2 items, we have no dupes!
  // Just return the lonely char or the empty array if no chars exist
  if (stringArray.length < 2) return stringArray[0] || [];

  // This is our flag! We set it to false initially since we cannot
  // assume that we have any duplicate chars, we actually have to prove
  // that they exist by detecting them in our for-loops
  let hasDupes = false;

  // Outer loop, checks each char once in the string array moving left to right
  for (let i = 0; i < stringArray.length; i++) {
    // Inner for-loop, this checks each outer for-loop char against all chars
    // except for the outer for-loop char itself (which would always look like a duplicate).
    // The reason we have to start from the beginning of the string array at each iteration
    // is because we have to consider chars to the left (behind our current outer loop char)
    // and chars to the right (in front of our outer loop char)
    for (let j = 0; j < stringArray.length; j++) {
      // This conditional makes sure we are not checking a char against itself, which would
      // otherwise look like a repeated char
      if (j !== i) {
        // Compare our outer for-loop char to our inner for-loop char, if they match
        // we found a dupe! Flip the flag and break out of this iteration (this moves the outer for-loop index + 1)
        // We can safely break out of this inner for-loop iteration because we know that at least 1 other matching char
        // exists, so it is not necessary to keep checking for more than 1 duplicate, one is enough for it to fail the
        // non-repeating char requirement!
        if (stringArray[i] === stringArray[j]) {
          hasDupes = true;
          break;

          // We did not find any dupes in this inner for loop iteration, so we need to flip the flag
          // accordingly to capture that fact (back to false). This means that we compared our current
          // outer for-loop char and found NO matching chars, so we found a non-repeated char!
        } else hasDupes = false;
      }
    }

    // If hasDupes is STILL false when our inner for-loop finished an iteration then our
    // inner for-loop failed to find a dupe for the char in question, so we just found our
    // first non-repeating char, lets return it!
    if (hasDupes === false) return stringArray[i];
  }

  return `No non-repeated chars in string "${string}", sorry!`;
};

// Code with no comments
const findNonRepeatingLoopShortVersion = string => {
  const a = string.split('');
  if (a.length < 2) return a[0] || [];

  let hasDupes = false;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (i !== j) {
        if (a[i] === a[j]) {
          hasDupes = true;
          break;
        } else hasDupes = false;
      }
    }

    if (hasDupes === false) return a[i];
  }

  return `No non-repeated chars in string "${string}", sorry!`;
};

console.log(findFirstNonRepeating('aaabcccdeeef'));
console.log(findFirstNonRepeating('abcabcabcabc'));

console.log(slickMethod('aaabcccdeeef'));
console.log(slickMethod('abcabcabcabc'));

console.log(mapMethod(''));
console.log(mapMethod('X'));
console.log(mapMethod('aaabcccdeeef'));
console.log(mapMethod('abcabcabcabc'));

console.log(findFirstNonRepeatingLoop('aabbcc'));
console.log(findFirstNonRepeatingLoop('aaabcccdeeef'));
console.log(findFirstNonRepeatingLoop('abcabcabcabc'));

console.log(findNonRepeatingLoopShortVersion('aabbcc'));
console.log(findNonRepeatingLoopShortVersion('aaazcccdeeef'));
console.log(findNonRepeatingLoopShortVersion('abcabcabcabc'));
console.log(findNonRepeatingLoopShortVersion('aaabbcccdeeef'));
console.log(findNonRepeatingLoopShortVersion('aaabcccdeeef'));
