// You’re given the pointer to the head node of a linked list, an integer to add to the list and the position at which the integer must be inserted.
// Create a new node with the given integer, insert this node at the desired position and return the head node.

// A position of 0 indicates head, a position of 1 indicates one node away from the head and so on.
// The head pointer given may be null meaning that the initial list is empty.

// As an example, if your list starts as 1 --> 2 --> 3  and you want to insert a node at position 2 with 4,
// your new list should be 1 --> 2 --> 4 --> 3

// Input is K (the insertion index) and the head of the linked list

const insertNode = (insertionIndex, data, linkedList) => {
  let currentNodeIndex = 0;

  // Handle empty node
  if (!linkedList.head) {
    linkedList.addNode(data);
  } else {
    // Traverse existing linked list until insertionIndex is reached
    const newNode = new Node(data);
    let currentNode = linkedList.head;
    while (currentNode.next && currentNodeIndex < insertionIndex - 1) {
      currentNode = currentNode.next;
      currentNodeIndex++;
    }
    // Perform insertion
    const temp = currentNode.next;
    currentNode.next = newNode;
    newNode.next = temp;
  }

  const postInsertion = linkedList.traverseNodes();
  return { postInsertion, linkedList };
};

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) this.head = newNode;
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }

  traverseNodes() {
    let currentNode = this.head;
    let traversal = [];
    while (currentNode) {
      traversal.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return traversal;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
const linkedListTwo = new LinkedList();
console.log(insertNode(3, 99, linkedList));
console.log(insertNode(3, 99, linkedListTwo));
