/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(data) {
  let newNode = this.makeNode(data);
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.head.next = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  let temp;
  if (this.head === this.tail) {
    temp = this.head.value;
    this.head = null;
    this.tail = null;
    return temp;
  } else {
    temp = this.head.value;
    this.head = this.head.next;
    return temp;
  }
};

LinkedList.prototype.contains = function(target) {
  function recursion(target, targetList) {
    if (targetList === null) {
      return false;
    } else {
      if (targetList.value === target) {
        return true;
      } else {
        let newTargetList = targetList.next;
        return recursion(target, newTargetList);
      }
    }
  }
  return recursion(target, this.head);
};

LinkedList.prototype.makeNode = function(data) {
  let node = {};
  node.value = data;
  node.next = null;
  return node;
};
