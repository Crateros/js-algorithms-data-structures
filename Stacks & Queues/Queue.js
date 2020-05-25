// ****** Queue implementation via array ******
// methods of interest: enqueue(item), deuque(),
// length(), index[0], & index[length - 1]

function Queue() {
  const queue = [];

  this.printQueue = function() {
    console.log(queue);
  };

  // Add item to the top (end) of the queue
  this.enqueue = function(item) {
    queue.push(item);
  };

  // Remove and return item from the bottom (beginning) of the queue
  this.dequeue = function() {
    return queue.shift();
  };

  this.queueFront = function() {
    return queue[0];
  };

  this.queueSize = function() {
    return queue.length;
  };

  this.emptyQueue = function() {
    return queue.length > 0;
  }
};

// console.log('---- Regular Queue Implementation');
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.printQueue();
// queue.enqueue(4);
// queue.dequeue();
// queue.printQueue();
// queue.enqueue(5);
// console.log(queue.queueSize());
// console.log(queue.queueFront());

// ****** Priority Queue implementation via array *******
function PriorityQueue() {
  const queue = [];

  this.printQueue = function() {
    console.log(queue);
  };

  // Items will have a value and a priority {value: x, priority: y}
  this.priorityEnqueue = function(item) {
    //  Immediately add the item to the priority queue if the queue is empty
    if (this.isEmpty()) {
      queue.push(item);
    } else {
      let added = false;
      // Add item based on priority, lower priority value translates to a higher priority
      for (let i = 0; i < queue.length; i++) {
        if (item.priority < queue[i].priority) {
          queue.splice(i, 0, item);
          added = true;
          break;
        }
      }
      // If priority of item is lower than current queue items
      // then add item to end of queue
      if (!added) {
        queue.push(item);
      }
    }
  };

  this.priorityDequeue = function() {
    return queue.shift();
  };

  this.isEmpty = function() {
    return queue.length < 1;
  };

  this.queueFront = function() {
    return queue[0];
  };

  this.queueSize = function() {
    return queue.length;
  };
}

// console.log('Priority Queue Implementation');
// const priorityQueue = new PriorityQueue();
// priorityQueue.priorityEnqueue({priority: 5, value: 'Hello'});
// priorityQueue.priorityEnqueue({ priority: 2, value: "Goodbye" });
// priorityQueue.priorityEnqueue({ priority: 5, value: "Cool" });
// priorityQueue.priorityEnqueue({ priority: 1, value: "Test" });
// priorityQueue.priorityEnqueue({ priority: 1, value: "Nuthin" });
// priorityQueue.priorityEnqueue({ priority: 3, value: "Not Working!" });
// priorityQueue.printQueue();
// console.log(priorityQueue.queueSize());
// console.log('First item: ', priorityQueue.queueFront());
// console.log("\n");
// priorityQueue.priorityDequeue();
// priorityQueue.priorityDequeue();
// priorityQueue.printQueue();


// ****** Queue implementation via class *******

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class QueueClass {
  constructor() {
    this.start = null;
    this.end = null;
  }

  queueIsEmpty() {
    return !this.start;
  }

  enqueue(value) {
    // Create new node with item
    const node = new QueueNode(value);

    // If queue is empty add incoming item to queue and update queue pointers
    if (this.queueIsEmpty()) {
      this.start = node;
      this.end = node;
    }

    // If queue is not empty first update the final node's 'next' property to reference the incoming node
    // and then set the queues 'end' property to the incoming node
    else {
      this.end.next = node;
      this.end = node;
    }
  }

  dequeue() {
    if (this.queueIsEmpty()) {
      console.log('Empty queue, nothing to remove!')
    }

    else if (!this.start.next) {
      const removedNode = this.start;
      this.start = null;
      this.end = null;
      console.log('Dequeued item: ', removedNode);
      console.log('The queue is now empty!');
    }

    else {
      const removedNode = this.start;
      this.start = removedNode.next;
      console.log('Dequeued item: ', removedNode);
      this.printQueue();
    }
  }

  printQueue() {
    if (this.queueIsEmpty()) {
      console.log('Empty queue!');
    }

    else {
      const queueItems = [];
      let tempNode = this.start

      // Loop through and add all current nodes to the printable array
      while(tempNode) {
        queueItems.push(tempNode);
        if (tempNode.next) {
          tempNode = tempNode.next;
        } else {
          tempNode = null;
        }
      }

      console.log(queueItems);
    }
  };
}

// const queueClass = new QueueClass();
// queueClass.enqueue('First');
// queueClass.enqueue('Second');
// queueClass.enqueue('Third');
// queueClass.enqueue('Fourth');
// queueClass.enqueue("Fifth");
// queueClass.printQueue();
// queueClass.dequeue();
// console.log('-------- After first Dequeue() --------');
// console.log('Updated start of queue: ', queueClass.start);
// console.log('End of queue: ', queueClass.end);
// queueClass.printQueue();
// queueClass.dequeue();
// queueClass.dequeue();
// queueClass.printQueue();
// queueClass.dequeue();
// queueClass.dequeue();
// queueClass.dequeue();


class QueueAgain {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.storage[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const removedItem = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    console.log('Removed item: ', removedItem);
  }
}

const anotherQueue = new QueueAgain();
anotherQueue.enqueue('first in line');
anotherQueue.enqueue('second in line');
anotherQueue.enqueue('third in line');
console.log(anotherQueue);
anotherQueue.dequeue();
console.log(anotherQueue);


