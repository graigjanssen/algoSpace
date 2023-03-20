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