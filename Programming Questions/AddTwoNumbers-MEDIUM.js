// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.




// Create a new ListNode that will serve as a growing sum list,
// set a reference to new ListNode so that head is accessible.
// Loop through and determine if val1 and val2 exist, then determine
// if flag needs to be handled (val1 + val2 > 9). Then traverse list1
// and list 2 via .next. Finally, if a flag still exists add it as a trailing
// node at the end, return listHead.next since the original list head value will
// be null

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  let listHead = new ListNode();
  let newNode = listHead;
  let flag = 0;

  while (l1 || l2) {
    let v1 = l1?.val || 0;
    let v2 = l2?.val || 0;
    newNode.next = new ListNode((v1 + v2 + flag) % 10);
    newNode = newNode.next;
    flag = v1 + v2 + flag > 9 ? 1 : 0;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (flag) newNode.next = new ListNode(1);

  return listHead.next;
};

const addTwoNumbersAgain = (a,b) => {
  const listHead = new ListNode;
  let newNode = listHead;
  let flag = 0;

  while (a || b) {
    let v1 = a?.val || 0;
    let v2 = b?.val || 0;
    newNode.next = new ListNode((v1 + v2 + flag) % 10);
    newNode = newNode.next;
    flag = v1 + v2 + flag > 9 ? 1 : 0;
    a = a?.next;
    b = b?.next;
  }

  if (flag) newNode.next = new ListNode(flag);

  return listHead.next;
}

const addTwoNumbersLinkedList = (a, b) => {
  const listHead = new ListNode();
  let newNode = listHead;
  let flag = 0;

  while (a || b) {
    let v1 = a?.val || 0;
    let v2 = b?.val || 0;
    newNode.next = new ListNode((v1 + v2 + flag) % 10);
    newNode = newNode.next;
    flag = v1 + v2 + flag > 9 ? 1 : 0;
    a = a?.next;
    b = b?.next;
  }

  if (flag) newNode.next = new ListNode(flag);

  return listHead.next;
}

// [8,9,9,9,0,0,0,1]
const addTwoNumbersLinkedListAgain = (l1, l2) => {
  const listHead = new ListNode();
  let newNode = listHead;
  let flag = 0;

  while (l1 || l2) {
    // Get values of current input pointers or default to 0 if null
    v1 = l1?.val || 0;
    v2 = l2?.val || 0;

    // Set newNode's next value to be sum of input pointers
    // and current flag value
    newNode.next = new ListNode((v1 + v2 + flag) % 10);
    // Advance newNode
    newNode = newNode.next;
    // Calculate flag if two digit sum is produced from input values
    flag = v1 + v2 + flag > 9 ? 1 : 0;

    // Advance the input pointers
    l1 = l1?.next;
    l2 = l2?.next;
  }

  // If a flag still exists add final node
  if (flag) newNode.next = new ListNode(flag);

  // Return original head pointer's next value (first populated value)
  return listHead.next;
}

const listOne = new ListNode(2);
listOne.next = new ListNode(4);
listOne.next.next = new ListNode(3);

const listTwo = new ListNode(5);
listTwo.next = new ListNode(6);
listTwo.next.next = new ListNode(4);

const listThree = new ListNode(9);
listThree.next = new ListNode(9);
listThree.next.next = new ListNode(9);
listThree.next.next.next = new ListNode(9);
listThree.next.next.next.next = new ListNode(9);
listThree.next.next.next.next.next = new ListNode(9);
listThree.next.next.next.next.next.next = new ListNode(9);

const listFour = new ListNode(9);
listFour.next = new ListNode(9);
listFour.next.next = new ListNode(9);
listFour.next.next.next = new ListNode(9);

// console.log(listOne);
// console.log(listTwo);

// console.log(addTwoNumbersLinkedList(listOne, listTwo));
// console.log(addTwoNumbersLinkedListAgain(listOne, listTwo));
const result = addTwoNumbersLinkedListAgain(listThree, listFour);
console.log(result);

let arr = [];
let currentNode = result;
while (currentNode) {
  arr.push(currentNode.val);
  currentNode = currentNode.next;
}

console.log(arr);
