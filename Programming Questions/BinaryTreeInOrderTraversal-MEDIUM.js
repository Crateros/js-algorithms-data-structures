// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Follow up: Recursive solution is trivial, could you do it iteratively?

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }

  addNode(data, node) {
    const newNode = new Node(data);
    if (!this.root) this.root = newNode;
    else {
      if (newNode.data < node.data) {
        if (!node.left) node.left = newNode;
        else this.addNode(data, node.left);
      } else {
        if (!node.right) node.right = newNode;
        else this.addNode(data, node.right);
      }
    }
  }
}

const binaryTree = new BinaryTree(5);
binaryTree.addNode(4, binaryTree.root);
binaryTree.addNode(6, binaryTree.root);
binaryTree.addNode(3, binaryTree.root);
binaryTree.addNode(2, binaryTree.root);
binaryTree.addNode(7, binaryTree.root);
binaryTree.addNode(8, binaryTree.root);
binaryTree.addNode(1, binaryTree.root);
binaryTree.addNode(9, binaryTree.root);
console.log(binaryTree);
