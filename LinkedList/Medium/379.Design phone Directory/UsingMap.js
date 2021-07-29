/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.limit = maxNumbers;
  this.map = new Map();
  for (let i = 0; i < this.limit; i++) {
    this.map.set(i, i);
  }
};

/**
       * Provide a number which is not assigned to anyone.
              @return - Return an available number. Return -1 if none is available.
       * @return {number}
       */
PhoneDirectory.prototype.get = function () {
  if (this.map.size > 0) {
    let num = this.map.keys().next().value;
    this.map.delete(num);
    return num;
  }
  return -1;
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  if (this.map.has(number)) {
    return true;
  }
  return false;
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (this.map.has(number)) {
    return;
  }

  if (this.map.size < this.limit) {
    console.log("Setting num=", number);
    this.map.set(number, number);
  }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
