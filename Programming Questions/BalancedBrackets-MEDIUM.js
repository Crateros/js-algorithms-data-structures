// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if
// the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket
// (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched.
// For example, {[(])} is not balanced because the contents in between { and } are not balanced.
// The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of
// parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced.
// If a string is balanced, return YES. Otherwise, return NO.

// STRATEGY:
// We can use Stack datastructure and push() any opening bracket characters onto the stack
// and when we encounter a closing bracket character we pop() from the stack and compare the
// popped value to ensure that the opening bracket character is the encountered close bracket
// character's counterpart.

// If we encount a mismatch or a non-empty stack at the end of the string traversal then we are
// not balanced.

const isBalanced = string => {
  const stack = [];
  const stringArray = string.split('');
  let isBalanced = true;

  compareBrackets = (a, b) => {
    switch (a) {
      case ']':
        if (b === '[') return true;
        break;
      case '}':
        if (b === '{') return true;
        break;
      case ')':
        if (b === '(') return true;
      default:
        return false;
    }
  };

  for (let i = 0; i < stringArray.length; i++) {
    // If matching bracket pair is not found immediately break
    if (!isBalanced) break;

    // Push left-hand brackets onto the stack
    if (stringArray[i] === '[' || stringArray[i] === '{' || stringArray[i] === '(') {
      stack.push(stringArray[i]);
    } else
      // If right-hand bracket is encountered pop most recent stack value
      // and compare to see if bracket pair exists
      isBalanced = compareBrackets(stringArray[i], stack.pop());
  }

  // If stack is not empty then the string has
  // an opening bracket with no closing counterpart
  if (stack.length) return false;
  else return isBalanced;
};

const testOne = '[{(){}()}]'; // Balanced
const testTwo = '[[({}]]'; // Unbalanced
const testThree = '[]'; // Balanced
const testFour = '{[(])}'; // Unbalanced

console.log(isBalanced(testOne));
console.log(isBalanced(testTwo));
console.log(isBalanced(testThree));
console.log(isBalanced(testFour));
