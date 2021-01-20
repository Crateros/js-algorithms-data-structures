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
  let slow = head;
  let fast = head;

  // Use Fast and Slow pointer to find middle of
  // linked list at Slow pointer, check for fast to
  // handle even linked lists and fast.next to handle
  // odd linked lists
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.data);
  console.log(fast);

  // If linked list has an odd number of nodes then fast
  // will end on the final node, whereas fast will end on
  // null if the linked list has an even number of nodes
  // since an even number has no true middle node

  // We now need to reverse the linked list from our established
  // midpoint (Slow pointer)
  let previous = null;
  while (slow) {
    let next = slow.next;
    slow.next = previous;
    previous = slow;
    slow = next;
  }
  console.log(previous.data)

  // Now we can compare head.data and previous.data to determine
  // if the linked list is a palindrome
  while (previous) {
    if (head.data !== previous.data) return false;
    head = head.next;
    previous = previous.next
  }
  return true
}



const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(2);
linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(7);
// linkedList.addNode(99);



console.log(linkedList);
console.log(linkedList.traverse(linkedList.head));
console.log(linkedListPalindrome(linkedList));
console.log(linkedListPalindromeNoSpace(linkedList.head));
