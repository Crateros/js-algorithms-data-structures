// Given the pointer to the head node of a doubly linked list, reverse the order of the nodes in place.
// That is, change the next and prev pointers of the nodes so that the direction of the list is reversed.
// Return a reference to the head node of the reversed list.

// Note: The head node might be NULL to indicate that the list is empty.

class Node {
  constructor(data) {
    this.data = data;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = this.tail = new Node(data);
  }

  addNode(data) {
    const newNode = new Node(data);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    current.next.prev = current;
  }

  printList() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current.data);
      current = current.next;
    }
    return output;
  }

  reverseList(node) {
    let current = node;
    this.tail = this.head;

    while (current) {
      this.head = current;
      let next = current.next;
      let prev = current.prev;
      current.next = prev;
      current.prev = next;
      current = current.prev;
    }
  }
}

const dbll = new DoublyLinkedList(1);
dbll.addNode(2);
dbll.addNode(3);
dbll.addNode(4);
dbll.addNode(5);
dbll.addNode(6);
dbll.addNode(7);
console.log(dbll);
console.log(dbll.printList(dbll.head));
dbll.reverseList(dbll.head);
console.log(dbll.printList(dbll.head));
