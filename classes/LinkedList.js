class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  traverseToIndex(index) {
    let i = 0;
    let pointer = this.head;
    while (i !== index) {
      pointer = pointer.next;
      i++;
    }
    return pointer;
  }

  append(value) {
    /**
     * Slightly altered the Udemy version where
     * the new node is first assigned to a variable.
     * Only difference is readability.
     * First step adds new node, second step updates tail pointer
     */
    this.tail.next = {
      value,
      next: null
    };
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value) {
    this.head = {
      value,
      next: this.head
    }
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = {
      value,
      next: leader.next
    }
    this.length++;
  }

  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
  }

  reverse() {
    // Check for null list or only one item
    if (!this.head || !this.head.next) {
      return;
    }
    // Create 3 pointers before iteration
    let prev = null; // Since initial head will end up last, it will be made to point to prev (null)
    let curr = this.head;
    let next = this.head.next;
    
    while (curr) {
      curr.next = prev; // Switch pointer direction
      // Move pointers one position "to the right"
      prev = curr;
      curr = next;
      // Make sure next isn't null to prevent error
      if (next) {
        next = next.next;
      }
    }
    // When loop finishes, prev is pointing to the end of the list
    // So this line performs the "flip" so the initial last node becomes the head
    this.head = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  traverseToIndex(index) {
    let i = 0;
    let pointer = this.head;
    while (i !== index) {
      pointer = pointer.next;
      i++;
    }
    return pointer;
  }

  append(value) {
    /**
     * Slightly altered the Udemy version where
     * the new node is first assigned to a variable.
     * Only difference is readability.
     * First step adds new node, second step updates tail pointer
     */
    this.tail.next = {
      value,
      next: null,
      prev: this.tail
    };
    this.tail = this.tail.next;
    this.length++;
  }

  prepend(value) {
    this.head.prev = {
      value,
      next: this.head,
      prev: null
    }
    this.head = this.head.prev;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = {
      value,
      next: leader.next,
      prev: leader
    }
    this.length++;
  }
  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }

    const leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    leader.next.prev = leader;
    this.length--;
  }
}

