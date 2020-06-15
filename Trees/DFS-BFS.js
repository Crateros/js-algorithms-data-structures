// DFS uses a stack (LIFO), which can utilize recursion
// call stack or a manual stack iteratively.
// DFS goes DEEP, uses backtracking, exhausts possible paths
// DFS: PreOrder - InOrder - PostOrder

// BFS uses an iterative apporach via a queue (FIFO).
// BFS goes WIDE, establishes tree levels
// BFS: LevelOrder

//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7

const depthFirstSearch = root => {
  // Stack-bases approach
  // PreOrder: Node --> Left --> Right
  // InOrder: Left --> Node --> Right
  // PostOrder: Left --> Right --> Node

  const stack = root ? [root] : [];
  let preOrderTraversal = [];

  // PreOrder
  while (stack.length > 0) {
    let node = stack.pop();
    preOrderTraversal.push(node.data);

    // Push the right node onto the stack before the left node
    // so that the left node gets popped off the stack first
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return preOrderTraversal;
};

const breadthFirstSearch = root => {
  // Level-order: go level by level via a queue
  const queue = root ? [root] : [];
  let levelOrderTraversal = [];

  while (queue.length > 0) {
    let node = queue.shift();

    // Push node an all respective children onto the queue
    levelOrderTraversal.push(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return levelOrderTraversal;
};

class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

const tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
console.log('PreOrder: ', depthFirstSearch(tree.root));
console.log('LevelOrder: ', breadthFirstSearch(tree.root));
