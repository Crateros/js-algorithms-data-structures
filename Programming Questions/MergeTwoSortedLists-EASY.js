// Merge two sorted linked lists and return it as a sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

class LinkedList {
  constructor(data) {
    if (data) this.head = this.tail = new Node(data);
    else this.head = this.tail = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.head) this.head = this.tail = newNode;
    else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = this.tail = newNode;
    }
  }

  traverseList(head) {
    let list = [];
    while (head) {
      list.push(head.data);
      head = head.next;
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

const mergeSortedLists = (aHead, bHead) => {
  let aPointer = aHead;
  let bPointer = bHead;
  const mergedList = new LinkedList();

  // All of aList data is handled in while loop,
  // any extra bList data is appended below
  while (aPointer) {
    if (aPointer.data < bPointer.data) {
      mergedList.addNode(aPointer.data);
      aPointer = aPointer.next;
    } else {
       mergedList.addNode(bPointer.data);
       if (bPointer.next) {
         bPointer = bPointer.next;
       }
    }
  }

  // Handle trailing bList data
  if (bPointer) {
    while(bPointer) {
      mergedList.addNode(bPointer.data);
      bPointer = bPointer.next;
    }
  }

  return mergedList;
}

const noSpaceMerge = (aHead, bHead) => {
  const start = new Node(0);
  let temp = start;

  while (aHead && bHead) {
    if (aHead.data < bHead.data) {
      temp.next = aHead;
      aHead = aHead.next;
    } else {
      temp.next = bHead;
      bHead = bHead.next;
    }
    temp = temp.next;
  }

  if (aHead) {
    temp.next = aHead;
  }

  else if (bHead) {
    temp.next = bHead;
  }

  return start.next;

}

const linkedListA = new LinkedList(1);
linkedListA.addNode(3);
linkedListA.addNode(5);
linkedListA.addNode(5);
linkedListA.addNode(6);
linkedListA.addNode(7);
linkedListA.addNode(8);


const linkedListB = new LinkedList(2);
linkedListB.addNode(4);
linkedListB.addNode(6);
linkedListB.addNode(10);
linkedListB.addNode(11);
linkedListB.addNode(12);
linkedListB.addNode(13);
linkedListB.addNode(14);
linkedListB.addNode(15);
linkedListB.addNode(16);
linkedListB.addNode(917);

const noSpaceMerged = noSpaceMerge(linkedListA.head, linkedListB.head);
console.log(linkedListA.traverseList(noSpaceMerged))

// const merged = mergeSortedLists(linkedListA.head, linkedListB.head);
// console.log(merged.traverseList(merged.head));

