// Write a program to merge two binary trees. Each node in the new tree should
// hold a value equal to the sum of the values of the corresponding nodes
// of the input trees.

// If only one input tree has a node in a given position,
// the corresponding node in the new tree should match that input node.

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
}

const mergeTrees = (a, b) => {
  // Handle case where only tree b hase node
  if (!a) return b;
  // Handle case where only tree a has node
  if (!b) return a;

  // Handle case where a and b have a node (sum nodes) by
  // updating a tree node in place, building new tree on top
  // of original a tree
  a.data += b.data;

  // Recurse left
  a.left = mergeTrees(a.left, b.left);

  // Recurse right
  a.right = mergeTrees(a.right, b.right);

  // Return summed a node
  return a;
};

const treeA = new BinaryTree(5);
treeA.root.left = new Node(9);
treeA.root.right = new Node(6);
treeA.root.left.left = new Node(11);
treeA.root.left.right = new Node(3);
treeA.root.left.left.right = new Node(2);

const treeB = new BinaryTree(7);
treeB.root.left = new Node(12);
treeB.root.right = new Node(2);
treeB.root.left.left = new Node(1);
treeB.root.left.right = new Node(5);
treeB.root.left.left.right = new Node(7);

mergeTrees(treeA.root, treeB.root);
console.log(treeA.root.data);
console.log(treeA.root.left.data);
console.log(treeA.root.right.data);
console.log(treeA.root.left.left.data);
