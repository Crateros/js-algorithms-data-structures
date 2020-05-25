// Arrays vs Linked Lists:

// Arrays are allocated as contiguous blocks of memory where
// each index is located directly beside its respective siblings.
// This allows for direct access of specific elements via index lookup.

// Linked lists support sequential access, a specific item in the list can
// only be accessed by traversing the list until the desired item is found.
// Elements are stored anywhere in memory, making traversals necessary.
// However, adding and removing elements in a linked list is much faster
// due to the fact that the items are not dependent on an allocated
// memory block. Array mutations can potentially cause total reallocation
// while linked list mutations add items to the first accessible memory block.

// Linked lists make use of pointers to store memory locations. Very volatile
// data sets may benefit from linked lists as the reallocation cost of arrays
// can prove cumbersome.

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // Add to the end of the list (tail)
  append(value) {
    // If empty list
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    // If populated list
    } else {
      // Preserve current tail
      let oldTail = this.tail;
      // Set new tail as incoming node
      this.tail = new Node(value);
      // Update previous tail next pointer to the incoming node
      oldTail.next = this.tail;
      // Set incoming node previos pointer to the previous tail
      this.tail.previous = oldTail;
    }
  }

  // Add to the beginning of the list (head)
  prepend(value) {
    // If empty list
    if (!this.head) {
      this.head = this.tail = new Node(value);
    }
    // If populated list
    else {
      // Preserve current head
      let oldHead = this.head;
      // Set new head as incoming node
      this.head = new Node(value);
      // Update previous head point to reference incoming node
      oldHead.previous = this.head;
      // Set incoming node next pointer to previous head
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    // If empty list
    if (!this.head) {
      return null;
    }
    // If populated list
    else {
      // Preserve current head
      const currentHead = this.head;

      // If the list contains only 1 node
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        // Update current head to be the next element in the list
        this.head = this.head.next;
        // Remove reference to previous head from new head
        this.head.previous = null;
      }

      return currentHead;
    }
  }

  deleteTail() {
    // If empty list
    if (!this.head) {
      return null;
    }
    // If populated list
    else {
      // Preserve current tail
      const currentTail = this.tail;

      // If list contains only 1 node
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        // Update current tail to be the previous element in the list
        this.tail = this.tail.previous;
        // Remove reference to previous tail from new tail
        this.tail.next = null;
      }

      return currentTail;
    }
  }

  search(value) {
    // Track our traversal progress
    let currentNode = this.head;

    while (currentNode) {
      // Element of interest has been located
      if (currentNode.value === value) {
        return console.log(currentNode);
      }
      // Continue traversing the linked list
      currentNode = currentNode.next;
    }

    // Value does not exist in linked list
    return console.log('Item not found!');
  }
}

class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
  }
}

let list = new LinkedList;
list.append('Hello');
list.append('Goodbye');
list.prepend('FIRST!');
console.log(list);
list.search('Hello');
list.search('Bogus');