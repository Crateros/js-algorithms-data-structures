// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.
// Could you implement both?

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) this.head = this.tail = newNode;
    else {
      let currentTail = this.tail;
      currentTail.next = this.tail = newNode;
    }
  }

  traverse(node) {
    let listData = [];
    let currentNode = node;

    while (currentNode !== null) {
      listData.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return listData;
  }

  reverseList(node) {
    // The first node becomes the new tail with a next of null
    let previous = null;
    this.tail = node;

    while (node) {
      // Update the current head to be the next value of node
      this.head = node;
      // Get next value from current node
      let next = node.next;
      // Set current node to point backwards
      node.next = previous;
      // Our previous value becomes current node to preserve value
      // for future iterations to access
      previous = node;
      // Increment current node to next value
      node = next;
    }

    return previous;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListTwo {
  constructor() {
    this.head = this.tail = null;
  }

  addNode(data) {
    let newNode = new Node(data);
    if (!this.head) this.head = this.tail = newNode;
    else {
      let currentTail = this.tail;
      currentTail.next = this.tail = newNode;
    }
  }

  traverseList(node) {
    let nodes = [];
    while (node) {
      nodes.push(node.data);
      node = node.next;
    }
    return nodes;
  }

  reverseList(node) {
    let previous = null;
    this.tail = node;

    while (node) {
      this.head = node;
      let next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this.head;
  }

  reverseListRecursive(node) {
    // Base case, exit the call stack
    if (node.next === null) {
      console.log(node.data);
      return node;
    }

    const reversedList = this.reverseListRecursive(node.next);
    console.log(node.data);
    node.next.next = node;
    node.next = null;
    return reversedList;
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
console.log(linkedList);
console.log(linkedList.traverse(linkedList.head));
console.log(linkedList.reverseList(linkedList.head));
console.log(linkedList);
console.log(linkedList.traverse(linkedList.head));

const linkedListTwo = new LinkedListTwo();
linkedListTwo.addNode(1);
linkedListTwo.addNode(2);
linkedListTwo.addNode(3);
linkedListTwo.addNode(4);
linkedListTwo.addNode(5);
linkedListTwo.addNode(6);
console.log(linkedListTwo);
console.log(linkedListTwo.traverseList(linkedListTwo.head));
console.log(linkedListTwo.reverseList(linkedListTwo.head));
console.log(linkedListTwo.traverseList(linkedListTwo.head));
console.log(linkedListTwo.reverseListRecursive(linkedListTwo.head));
