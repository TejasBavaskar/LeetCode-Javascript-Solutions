class Node {
  constructor(val, next) {
    this.val = val !== undefined ? val : null;
    this.next = next !== undefined ? next : null;
  }
}

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let temp = this.head;
    //console.log(this.head)
    let count = 0;
    while (temp && count <= index) {
      if (count === index) {
        //console.log('returning count=',count, 'index = ',index, 'val= ',temp.val)
        return temp.val;
      }
      count++;
      temp = temp.next;
    }
    return -1;
  }
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    if (!this.head) {
      this.head = new Node(val);
      console.log("Added at head val= ", val);
      console.log(this.head);
      return;
    }

    let dummy = new Node(val, this.head);
    this.head = dummy;
    console.log("Added at head val= ", val);
    console.log(this.head);
  }
  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new Node(val);
    console.log("Added at Tail val= ", val);
    console.log(this.head);
  }
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    let prev = null;
    let temp = this.head;
    let count = 0;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    while (temp) {
      if (count === index) {
        let newNode = new Node(val, temp);
        prev.next = newNode;
        console.log("Added at index =", index, " val= ", val);
        console.log(this.head);
        return;
      }
      count++;
      prev = temp;
      temp = temp.next;
    }

    if (count === index) {
      prev.next = new Node(val);
    }
  }
  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    let prev = null;
    let temp = this.head;
    let count = 0;
    while (temp) {
      if (count === index) {
        if (prev) {
          prev.next = temp.next;
        } else {
          this.head = this.head.next;
        }

        return;
      }
      count++;
      prev = temp;
      temp = temp.next;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
