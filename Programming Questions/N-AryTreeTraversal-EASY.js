// Given an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value

//        1
//     /  |  \
//    3   2   4
//   / \
//  5   6

// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [1, 3, 5, 6, 2, 4];

// Input: root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
// Output: [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10];

class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children; // number[]
  }
}

const preOrderTraversal = node => {
  const output = [];
  if (!node) return output;

  traverse = node => {
    if (node) output.push(node.val);
    if (!node.children.length) return;
    node.children.forEach(child => traverse(child));
  };

  traverse(node);
  return output;
};

const preOrderTraversalIterative = node => {
  const output = [];
  if (!node) return output;
  const stack = [node];

  while (stack.length) {
    let currentNode = stack.shift();
    output.push(currentNode.val);
    stack.unshift(...currentNode.children);
  }

  return output;
};

const naryTree = new Node(1, [new Node(3, [new Node(5, []), new Node(6, [])]), new Node(2, []), new Node(4, [])]);
console.log(preOrderTraversal(naryTree));
console.log(preOrderTraversalIterative(naryTree));
