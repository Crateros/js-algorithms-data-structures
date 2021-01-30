// Given a non-empty, singly linked list with head node head,
// return a middle node of linked list. If there are two middle nodes,
// return the second middle node.

// Example 1:
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

// Example 2:
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second one.

class LinkedList {
  constructor(data) {
    this.head = this.tail = new Node(data);
  }

  addNode(data) {
    const newNode = new Node(data);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = this.tail = newNode;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const middleOfLinkedList = head => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.data);
  return slow;
}

const linkedList = new LinkedList(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.addNode(6);

console.log(linkedList.head, '------', linkedList.tail);
console.log(middleOfLinkedList(linkedList.head));