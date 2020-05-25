// ****** Stack implementation via array ******
// methods of interest: push(), pop(), length(), & index[0]

//Use a stack to determine palindrome
// ----------------------------------
const isPalindrome = (word) => {
  let reverse = '';

  // Push items onto the stack
  const stack = [...word];

  // Remove items from the stack in FILO fashion (top of stack removal)
  while (stack.length) {
    reverse += stack.pop();
  };

  return reverse === word ? 'Is palindrome' : 'Is not palindrome';
}

// ****** Stack implementation via class *******
class Stack {
  constructor() {
    this.stackSize = 0;
    this.stackStorage = {};
  };

  // Add items to the top of the stack
  push(item) {
    this.stackSize++;
    this.stackStorage[this.stackSize] = item;
  };

  // Removes and returns value from the top of the stack
  pop() {
    if (this.stackSize === 0) {
      return undefined;
    };

    const result = this.stackStorage[this.stackSize];
    delete this.stackStorage[this.stackSize];
    this.stackSize--;
    return result;
  };

  size() {
    return this.stackSize;
  };

  // Returns value at the top of the stack
  peek() {
    return this.stackStorage[this.stackSize - 1];
  };
};

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push('Cool');
console.log(myStack.peek());
let topItem = myStack.pop();
console.log('first top: ', topItem);
topItem = myStack.pop();
console.log('second top: ', topItem);
console.log(isPalindrome('racecar'));
console.log(isPalindrome('racecars'));




// class StackAgain {
//   constructor() {
//     this.stackStorage = {};
//     this.stackSize = 0;
//   };

//   push(item) {
//     this.stackSize++;
//     this.stackStorage[this.stackSize] = item;
//   };

//   pop() {
//     const removedItem = this.stackStorage[this.stackSize];
//     delete this.stackStorage[this.stackSize];
//     this.stackSize--;
//     console.log('Popped: ', removedItem);
//   };

//   peek() {
//     console.log(this.stackStorage[this.stackSize]);
//   };
// };