/*
  Given a linked list, remove all consecutive nodes that sum to zero.
  Print out the remaining nodes. For example, suppose you are given
  the input 3 -> 4 -> -7 -> 5 -> -6 -> 6. In this case, you should
  first remove 3 -> 4 -> -7, then -6 -> 6, leaving only 5.
*/

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  };
};

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  append() {
    [...arguments].map((arg, index) => {
      if (!this.head) {
        this.head = this.tail = new Node(arg, [...arguments][index + 1] || null);
      } else {
        const currentTail = this.tail;
        this.tail = new Node(arg, [...arguments][index + 1] || null);
        currentTail.next = this.tail;
      };
    });
  };
};

linkedList = new LinkedList();
linkedList.append(3,4,-7,5,-6,6);
console.log(linkedList);
