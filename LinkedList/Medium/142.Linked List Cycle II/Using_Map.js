//O(n)
//Space Complexity: O(n)
var detectCycle = function (head) {
  var map = new Map();
  let temp = head;
  let index = 0;

  while (temp) {
    if (map.has(temp)) {
      return temp;
    }

    map.set(temp, index);
    index++;
    temp = temp.next;
  }

  return null;
};
