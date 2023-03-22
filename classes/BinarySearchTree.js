class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let pointer = this.root;

    while (pointer) {
      if (newNode.value > pointer.value) {
        if (pointer.right) {
          pointer = pointer.right;
        } else {
          pointer.right = newNode;
          pointer = null;
        }
      } else {
        if (pointer.left) {
          pointer = pointer.left;
        } else {
          pointer.left = newNode;
          pointer = null;
        }
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) {
      return;
    }

    let pointer = this.root;
    while (pointer) {
      if (pointer.value === value) {
        return pointer;
      } else {
        pointer = value > pointer.value ? pointer.right : pointer.left;
      }
    }
  }
}