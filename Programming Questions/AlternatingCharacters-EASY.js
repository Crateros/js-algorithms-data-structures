// You are given a string containing characters 'A' and 'B' only.
// Your task is to change it into a string such that there are no matching adjacent characters.
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string "AABAABABAAABB" you would make 5 deletions
// resulting in the string "ABABABAB"

const minimumDeletions = string => {
  let minDeletions = 0;

  string.split('').forEach((element, index, array) => {
    element === array[index + 1] ? minDeletions++ : null;
  });

  return minDeletions;
};

const minDeletionsAgain = string => {
  let minDeletions = 0;

  string.split('').forEach((element, index, array) => {
    element === array[index + 1] ? minDeletions++ : null;
  });

  return minDeletions;
}

const minDeletionsLoop = string => {
  let minDeletions = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i+1]) minDeletions++;
  }

  return minDeletions;
}

const test1 = 'AAAA';
const test2 = 'BBBBB';
const test3 = 'ABABABAB';
const test4 = 'BABABAB';
const test5 = 'AAABBB';

console.log(minimumDeletions('AAAA'));
console.log(minimumDeletions(test1));
console.log(minimumDeletions(test2));
console.log(minimumDeletions(test3));
console.log(minimumDeletions(test4));
console.log(minimumDeletions(test5));

console.log(minDeletionsAgain('AAAA'));
console.log(minDeletionsAgain(test1));
console.log(minDeletionsAgain(test2));
console.log(minDeletionsAgain(test3));
console.log(minDeletionsAgain(test4));
console.log(minDeletionsAgain(test5));

console.log(minDeletionsLoop('AAAA'));
console.log(minDeletionsLoop(test1));
console.log(minDeletionsLoop(test2));
console.log(minDeletionsLoop(test3));
console.log(minDeletionsLoop(test4));
console.log(minDeletionsLoop(test5));
