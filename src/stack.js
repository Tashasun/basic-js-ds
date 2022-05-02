const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let n = { element: element, next: null };

    if (!this.head) {
      this.head = n;
      this.tail = n;
    }
    else {
      n.next = this.head;
      this.head = n;
    }
    return n.element;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let first = this.head.element;
    this.head = this.head.next;
    return first;
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head.element;
  }
}

module.exports = {
  Stack
};


// let stack = new Stack;
// console.log(stack)
// console.log(stack.push(3))
// console.log(stack)
// console.log(stack.push(4))
// stack.push(5)
// stack.push(6)
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack)
// console.log(stack.peek())
