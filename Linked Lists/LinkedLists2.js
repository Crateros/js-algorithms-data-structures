function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node() {
  this.next = null;
  this.previous = null;
  this.content = null;
}

LinkedList.prototype.add = function(data) {
  var node = new Node();
  node.content = data;

  //Empty list, set head to node
  if(this.head == null) {
    this.head = node;
    this.length++;
    return node;
  }

  //If no tail, set tail to node
  if(this.tail == null) {
    this.tail = node;
    this.tail.previous = this.head;
    this.head.next = this.tail;
    this.length++;
    return node;
  }

  //Append new node to end of linked list
  this.tail.next = node;
  node.previous = this.tail;
  this.tail = node;
  this.length++;
  return node;
}

LinkedList.prototype.print = function() {
  if (this.head === null) {
    return "Empty List";
  }
  var s = "";
  var node = this.head;
  while (node != null) {
    //Build string output
    s += node.content + " ";
    //Move to next node
    node = node.next;
  }
  console.log(s);

}

function addNode() {
  var entry = document
}


var myList = new LinkedList();
myList.add(5);
myList.print();
myList.add(7);
myList.add(11);
myList.add(6);
myList.print();
