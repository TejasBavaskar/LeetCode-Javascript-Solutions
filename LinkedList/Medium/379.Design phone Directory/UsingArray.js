//All functions => O(n)
/**
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.arr = Array(maxNumbers);
  for (let i = 0; i < maxNumbers; i++) {
    this.arr[i] = i;
  }
  this.limit = maxNumbers;
};

/**
       * Provide a number which is not assigned to anyone.
              @return - Return an available number. Return -1 if none is available.
       * @return {number}
       */
PhoneDirectory.prototype.get = function () {
  if (this.arr[0] !== undefined) {
    let num = this.arr[0];
    this.arr.splice(0, 1);
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
  if (this.arr.includes(number)) {
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
  if (this.arr.includes(number)) {
    return;
  }
  if (number < this.limit) {
    for (let i = 0; i < this.limit; i++) {
      if (this.arr[i] !== undefined) {
        if (this.arr[i] > number) {
          this.arr.splice(i, 0, number);
          break;
        }
      } else {
        this.arr[i] = number;
        break;
      }
    }
  }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
