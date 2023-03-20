class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (!this.top) {
      return;
    }

    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.bottom = newNode;
    } else {
      newNode.next = this.top
    }
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) {
      return;
    }

    const poppedNode = this.top
    this.top = this.top.next;
    if (!this.top) {
      this.bottom = null;
    }
    this.length--;

    return poppedNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}

class ArrayStack {
  constructor() {
    this.array = [];
    this.length = this.array.length;
  }

  peek() {
    return this.array[this.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }

  isEmpty() {
    return this.length === 0;
  }
}