/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function() {
  this.storage = {};
  this.top = 0;
  // add an item to the top of the stack
  this.push = function(target) {
    this.top++;
    this.storage[this.top] = target;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    let poptarget = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return poptarget;
  };

  // return the number of items in the stack
  this.size = function() {
    return this.top;
  };
};

/**
 * Queue Class
 */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(target) {
    // TODO: implement `enqueue`
    inbox.push(target);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    let inboxLength = inbox.top;
    for (let i = 0; i < inboxLength; i++) {
      outbox.push(inbox.pop());
    }
    let dequeuetarget = outbox.pop();
    for (let i = 0; i < outbox.top; i++) {
      inbox.push(outbox.pop());
    }
    return dequeuetarget;
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    return inbox.size();
  };
};
