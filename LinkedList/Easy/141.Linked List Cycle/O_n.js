//O(n) => Using Two Pointer
var hasCycle = function (head) {
  let temp1 = head;
  let temp2 = head;

  while (temp1 && temp2 && temp2.next) {
    temp1 = temp1.next;
    temp2 = temp2.next.next;

    if (temp1 === temp2) {
      return true;
    }
  }

  return false;
};

//-------------- OR ---------------
//O(n) => Using Set extra space O(n)
var hasCycle = function (head) {
  let mySet = new Set();

  let temp = head;
  while (temp) {
    if (mySet.has(temp)) {
      return true;
    }
    mySet.add(temp);
    temp = temp.next;
  }

  return false;
};
