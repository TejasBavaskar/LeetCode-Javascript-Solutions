//Using Singly Linked List
var Node = function (val) {
  this.val = val === undefined ? 0 : val;
  this.next = null;
};
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.maxSize = k;
  this.count = 0;
  this.head = null;
  this.front = this.head;
  this.rear = this.head;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }

  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.front = this.head;
    this.rear = this.head;
  } else {
    this.rear.next = newNode;
    this.rear = newNode;
  }

  this.count++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  if (this.front === this.rear) {
    this.head = null;
    this.front = this.head;
    this.rear = this.head;
    this.count = 0;
  } else {
    this.front = this.front.next;
    this.head = this.front;
    this.count--;
  }

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.front.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.rear.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return !this.front || !this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.maxSize;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
