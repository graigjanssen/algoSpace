class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
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
}