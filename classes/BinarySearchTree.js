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
  // Iterative solution summary
  // Once node is found, there are 3 main scenarios:
  // 1. No children (leaf)
  // 2. One child (easy delete by promoting only child)
  // 3. Two children (needs another while loop to promote smallest node from right subtree)
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
    // One child  
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
    // Can either find and "promote" the smallest node on the right or largest on the left
    // ChatGPT said it's slightly preferable to go to the right because it tends to produce more balanced trees, so...  
    } else {
      let smallestParent = current;
      let smallest = current.right;

      // Find smallest node in right subtree by going left until you can't no more
      while (smallest.left !== null) {
        smallestParent = smallest;
        smallest = smallest.left;
      }

      // Replace current value with smallest value, so no nodes moving around, tree structure not touched
      current.value = smallest.value;

      // Delete that smallest leaf node
      // We know there is no smallest.left since the while loop completed
      // smallest.right will either be a node or null, doesn't matter
      if (smallest = smallestParent.left) {
        smallestParent.left = smallest.right;
      } else {
        smallestParent.right = smallest.right;
      }
    }

    return this.root;
  }
}