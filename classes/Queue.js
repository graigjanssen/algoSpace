class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (!this.length) {
      return;
    }

    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return;
    }
    const first = this.first;
    this.first = this.first.next;
    this.length--;
    
    return first;
  }
}

class StackBasedQueue {
  constructor() {
    this.stack = [];
    this.queue = [];
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[0];
    }
    return this.queue[this.queue.length - 1];
  }

  enqueue(value) {
    const length = this.queue.length;
    for (let i = 0; i < length; i++) {
      this.stack.push(this.queue.pop());
    }
    this.stack.push(value);
    return this;
  }

  dequeue() {
    const length = this.stack.length;
    for (let i = 0; i < length; i++) {
      this.queue.push(this.stack.pop());
    }
    this.queue.pop();
    return this;
  }
}