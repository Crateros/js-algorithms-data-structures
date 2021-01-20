// Given a singly linked list, group all odd nodes together followed by the even nodes.
// Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity
// and O(nodes) time complexity.

// Example 1:
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

// Constraints:
// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
// The length of the linked list is between [0, 10^4].

class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) this.head = this.tail = newNode;
    else {
      let currentTail = this.tail;
      currentTail.next = this.tail = newNode;
    }
  }

  traverse() {
    const traversal = [];
    let currentNode = this.head;
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

// We can use multiple variables to keep track of odds head (head),
// evens head (head.next) and then odd and even variables. We alternate updating
// them off of each other and moving each variable through the list, skipping one
// node at a time respectively
const evenOddLinkedList = head => {
  if (!head) return null;
  if (!head.next) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head
}

const evenOddLinkedListAgain = head => {
  if (!head) return null
  // Reference to original odd head (technically this is just head, which is redundant)
  let oddHead = head;
  // Reference to original even head
  let evenHead = head.next
  // Odd will loop through all odd nodes
  let odd = oddHead;
  // Even will loop through all even nodes
  let even = evenHead;

  while (even && even.next) {
    // Odd.next is assigned to even.next, essentially doing odd.next.next
    odd.next = even.next;
    // Odd now becomes the updated next value to traverse odd nodes
    odd = odd.next;
    // Even.next is assigned to odd.next (which was updated above), essentially
    // doing even.next.next
    even.next = odd.next;
    // Even now becomes the updated next value to traverse even nodes
    even = even.next
  }

  // We now have an even list and an odd list, append and return them
  odd.next = evenHead;
  return oddHead;
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);
linkedList.addNode(7);
linkedList.addNode(8);
// console.log(linkedList.traverse());
// console.log(evenOddLinkedList(linkedList.head));
// console.log(linkedList.traverse());
console.log(evenOddLinkedListAgain(linkedList.head));
console.log(linkedList.traverse());

