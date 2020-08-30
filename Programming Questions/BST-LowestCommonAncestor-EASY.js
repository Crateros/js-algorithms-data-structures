// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: The lowest common ancestor is defined between two nodes p and q as the lowest node in T that
// has both p and q as descendants (where we allow a node to be a descendant of itself).
// Given binary search tree: root = [6,2,8,0,4,7,9,null,null,3,5]

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Constraints:
// All of the nodes' values will be unique.
// p and q are different and both values will exist in the BST.

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }

  addNode(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else this.insertNode(this.root, newNode);
  }

  insertNode(root, node) {
    if (node.data < root.data) {
      if (!root.left) {
        root.left = node;
      } else this.insertNode(root.left, node);
    } else {
      if (!root.right) {
        root.right = node;
      } else this.insertNode(root.right, node);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

const lowestCommonAncestor = (root, a, b) => {
  // LCA of a and b found, return root
  if (root.left.data === a && root.right.data === b) {
    return root.data;
  } else if (a < root.data && b < root.data) {
    // Traverse left
    return lowestCommonAncestor(root.left, a, b);
  } else if (a > root.data && b > root.data) {
    // Traverse right
    return lowestCommonAncestor(root.right, a, b);
  }
};

const binaryTree = new BinaryTree(8);
binaryTree.addNode(6);
binaryTree.addNode(11);
binaryTree.addNode(9);
binaryTree.addNode(14);
binaryTree.addNode(13);
binaryTree.addNode(18);

console.log(binaryTree.root);
console.log(lowestCommonAncestor(binaryTree.root, 9, 14));
