//O(n)
var getDecimalValue = function (head) {
  let temp = head;
  let str = "";

  while (temp) {
    str += temp.val;
    temp = temp.next;
  }

  return parseInt(str, 2);
};
