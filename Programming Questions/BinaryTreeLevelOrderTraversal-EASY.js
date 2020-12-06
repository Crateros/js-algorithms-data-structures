// Traverse a binary tree via level order traversal (BFS)

//     8
//    / \
//   4   13
//  / \   \
// 2   6   19

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(node, data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
    } else {
      if (node.data > data) {
        if (!node.left) node.left = newNode;
        else this.addNode(node.left, data);
      }

      if (node.data <= data) {
        if (!node.right) node.right = newNode;
        else this.addNode(node.right, data);
      }
    }
  }

  levelOrderTraversal(node) {
    let currentNode = node;
    const queue = [currentNode];
    const result = [];

    while (queue.length) {
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      result.push(queue.shift().data);
      currentNode = queue[0];
    }

    return result;
  }
}

const binaryTree = new BinaryTree();
binaryTree.addNode(binaryTree.root, 8);
binaryTree.addNode(binaryTree.root, 4);
binaryTree.addNode(binaryTree.root, 13);
binaryTree.addNode(binaryTree.root, 2);
binaryTree.addNode(binaryTree.root, 6);
binaryTree.addNode(binaryTree.root, 19);
console.log(binaryTree.levelOrderTraversal(binaryTree.root));
