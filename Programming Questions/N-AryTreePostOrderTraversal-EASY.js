// Given an n-ary tree, return the PostOrder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value

//        1
//     /  |  \
//    3   2   4
//   / \
//  5   6

// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [5, 6, 3, 2, 4, 1];

// Input: root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14];
// Output: [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1];

class Node {
  constructor(data, children) {
    this.data = data;
    this.children = children;
  }

  traverseRecursive(node) {
    const output = [];
    if (!node) return output;

    const traverse = node => {
      node.children.forEach(node => traverse(node));
      output.push(node.data);
    };

    traverse(node);
    return output;
  }

  traverseIterative(node) {
    const output = [];
    if (!node) return output;
    const stack = [node];

    while (stack.length) {
      let currentNode = stack.pop();
      output.unshift(currentNode.data);
      stack.push(...currentNode.children);
    }

    return output;
  }
}

const nAryTree = new Node(1, [new Node(3, [new Node(5, []), new Node(6, [])]), new Node(2, []), new Node(4, [])]);
console.log(nAryTree.traverseRecursive(nAryTree));
console.log(nAryTree.traverseIterative(nAryTree));
