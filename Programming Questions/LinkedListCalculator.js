// Linked List Calculator
// Sum two linked lists and create new linked list from sum:

// 2 --> 5 --> 5 + 4 --> 5 --> 6 = 7 --> 1 --> 1

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null
  };
};

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  };

  append() {
    arguments[0].map((item, index) => {
      if (!this.head) {
        this.head = this.tail = new Node(item, [...arguments][index + 1] || null);
      } else {
        let currentTail = this.tail;
        this.tail = new Node(item, [...arguments][index + 1] || null);
        currentTail.next = this.tail;
      }
    });
  };
};

const linkedOne = new LinkedList();
linkedOne.append([2,5,5]);

const linkedTwo = new LinkedList();
linkedTwo.append([4,5,6]);

sumLinkedLists = (args) => {
  let stringInts = [];

  args.map(linkedList => {
    let currentNode = linkedList.head;
    let string = '';

    while (currentNode) {
      string += currentNode.value;
      currentNode = currentNode.next || null;
    }

    stringInts.push(string)
  });

  let sum = 0;
  stringInts.map(string => sum += parseInt(string));
  sum = sum.toString().split('').map(item => parseInt(item));
  let sumLinkedList = new LinkedList();
  sumLinkedList.append(sum);
  console.log(sumLinkedList);
};

sumLinkedLists([linkedOne, linkedTwo]);