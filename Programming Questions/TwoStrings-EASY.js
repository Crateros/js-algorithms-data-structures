// Given two strings, determine if they share a common substring.
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring "a".
// The words "be" and "cat" do not share a substring.

// Return "Yes" if a common substring exists otherwise return "No".

// Create bSet from bString to get all unique characters: new Set(bString)
// then create an intersection Set by looking at aString, turning string into into an array,
// and then filtering that array by any character matches that are contained in the bSet:
// intersection = new Set([...aString].filter(char => bSet.has(char)). We end up with
// a set that only contains common characters between the two strings. If our set is
// at least size > 0 then we have a common character.

const twoStrings = (a, b) => {
  const bSet = new Set(b);
  console.log(bSet);

  // Perform intersection between aSet and bSet
  const intersection = new Set([...a].filter(char => bSet.has(char)));
  return intersection.size > 0 ? 'Yes' : 'No';
};

const twoStringsAgain = (a,b) => {
  const bSet = new Set(b);
  console.log(bSet);

  const intersection = new Set([...a].filter(char => bSet.has(char)));
  console.log(intersection);
  return intersection.size > 0
}

const string1 = 'aaaaa';
const string2 = 'bbbbb';
const string3 = 'aaaaabb';
console.log(twoStrings(string1, string2));
console.log(twoStrings(string1, string3));
console.log(twoStrings(string2, string3));

console.log(twoStringsAgain('aaaaaa', 'bbbbbb'));
console.log(twoStringsAgain('cat', 'bat'));
console.log(twoStringsAgain('qwertyui', 'iiiiiii'));

