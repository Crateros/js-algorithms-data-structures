// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      let currentTail = this.tail;
      currentTail.next = this.tail = newNode;
    }
  }

  traverse(node) {
    const list = [];

    let currentNode = node;
    while (currentNode) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return list;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedListPalindrome = linkedList => {
  const array = linkedList.traverse(linkedList.head);
  return array.join('') === array.reverse().join('');
};

const linkedListPalindromeNoSpace = head => {
  let slow = fast = head;

  while (fast || fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  console.log(slow.data);
  console.log(fast.data);
}



const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(4);
linkedList.addNode(3);
linkedList.addNode(2);
linkedList.addNode(1);

console.log(linkedList);
console.log(linkedList.traverse(linkedList.head));
console.log(linkedListPalindrome(linkedList));
console.log(linkedListPalindromeNoSpace(linkedList.head));
