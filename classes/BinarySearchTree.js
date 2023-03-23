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
    return null;
  }

  remove(value) {
    // Empty tree
    if (!this.root) {
      return;
    }

    let current = this.root;
    let parent = null;

    // Find the node
    while (current !== null && current.value !== value) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }

    // Node not found
    if (!current) {
      console.log(`Could not find ${value} in that Binary Search Tree`);
      return this.root;
    }

    /** Now we can assume we found the node, so we get into the hairy logic 
     Break down the cases in terms of possible children: 0, 1 or 2
     But also have to consider if the node we're deleting is the root or not 
    */

    // Current is a leaf node with no children
    if (current.left === null && current.right === null) {
      // Leaf with no parent (one node BST)
      if (parent === null) {
        this.root = null;
      // Regular leaf scenario  
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    // One null child  
    } else if (current.left === null || current.right === null) {
      const newNode = current.left || current.right;
      // Root node
      if (parent === null) {
        this.root = null;
      } else if (current === parent.left) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    // Two children  
    } else {

    }
  }
}