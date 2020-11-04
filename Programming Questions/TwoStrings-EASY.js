// Given two strings, determine if they share a common substring.
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring "a".
// The words "be" and "cat" do not share a substring.

// Return "Yes" if a common substring exists otherwise return "No".

const twoStrings = (a, b) => {
  const bSet = new Set(b);
  console.log(bSet);

  // Perform intersection between aSet and bSet
  const intersection = new Set([...a].filter(char => bSet.has(char)));
  return intersection.size > 0 ? 'Yes' : 'No';
};

const string1 = 'aaaaa';
const string2 = 'bbbbb';
const string3 = 'aaaaabb';
console.log(twoStrings(string1, string2));
console.log(twoStrings(string1, string3));
console.log(twoStrings(string2, string3));
