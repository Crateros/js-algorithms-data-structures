// Deep clone a linked list such that all nodes and pointer
// are identical to the original linked list

class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  };

  append(value) {
    if (this.isEmpty()) {
      this.head = this.tail = new Node(value);
    } else {
      const currentTail = this.tail;
      this.tail = new Node(value);
      currentTail.next = this.tail;
      this.tail.previous = currentTail;
    };
  };

  isEmpty() {
    return !this.head;
  };
}

const cloneLinkedList = (linkedList) => {
  const clonedList = new LinkedList();

  // We need to step through each value in the original list
  // and append that node to our cloned list
  let currentNode = linkedList.head;

  while (currentNode) {
    clonedList.append(currentNode.value)
    currentNode = currentNode.next
  }

  return clonedList;
}

// Build a simple linked list
const originalList = new LinkedList();
originalList.append('Alpha');
originalList.append('Bravo');
originalList.append('Charlie');
originalList.append('Delta');
originalList.append('Echo');
console.log(originalList);

console.log('\n---------------------------\n');

const clonedList = cloneLinkedList(originalList);
console.log(clonedList);

originalList.append('Foxtrot');
console.log(originalList);

console.log("\n---------------------------\n");
clonedList.append('I am a clone...');
console.log(clonedList);
