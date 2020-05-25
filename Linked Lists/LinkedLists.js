function LinkedList() {
  this.head = null;
}
//Best to use prototypes for reuse, one object shared by every intance of LinkedList, can't use private variables though with prototype

LinkedList.prototype.isEmpty = function() {
  if (this.head === null) {
    return true;
  }
  else {
    return false;
  }
};

LinkedList.prototype.size = function() {
  //Start of at this.head and keep track of count, create temporary variable to traverse so you do not overwrite this.head
  var current = this.head;
  var count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
}

//Add to beginning of list. Create new node, make new node pointer to current head, adjust current head pointer
LinkedList.prototype.prepend = function(value) {
  var newNode = {
    data: value,
    next: this.head
  };
  this.head = newNode;
};

//Add to end of list, create new node using value, traverse to end of list, make last nodes value point to new node
LinkedList.prototype.append = function(value) {
  var newNode = {
    data: value,
    next: null
  };

  if(this.isEmpty()) {
    this.head = newNode;
    return;
  }

  var current = this.head;

  //Traverses list, stops at last node
  while(current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

LinkedList.prototype.contains = function(value) {
  var current = this.head;

  while(current !== null) {
    if(current.data === value) {
      return true;
    }
    current = current.next;
  }
  //Value not in list
  return false;
};

//Remove list item, if head node to be removed, just make this.head = this.head.next
LinkedList.prototype.remove = function(value) {
  //Check to see if remove item exists in list`
  if (!this.contains(value)) {
    return;
  }
  //Remove head list item
  if(this.head.data === value) {
    this.head = this.head.next;
    return;
  }
  //Remove a list item somewhere between head and end node, need to keep track of current and previous to adjust pointers
  var previous = null;
  var current = this.head;

  while(current.data !== value) {
      previous = current;
      current = current.next;
  }

  previous.next = current.next;
};

LinkedList.prototype.insert = function(value) {}

LinkedList.prototype.print = function() {
  var output = '[';
  var current = this.head;

  while(current !== null) {
    output += current.data;
    if(current.next !== null) {
      output += ',';
    }
    current = current.next;
  }
  output += ']';
  console.log(output);
};

var list = new LinkedList();
list.append(10);
list.append(15);
list.append(20);
list.append(25);
list.prepend(1);
console.log(list.contains(10));
console.log(list.contains(21));
console.log(list.size());
console.log(list.isEmpty());
list.print();
