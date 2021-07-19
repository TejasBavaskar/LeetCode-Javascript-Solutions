//O(n)  => Using HashMap
//Space Complexity: O(n)
var reorderList = function (head) {
  let map = new Map();
  let temp = head;
  let index = 0;

  while (temp) {
    map.set(index, temp);
    temp = temp.next;
    index++;
  }

  let start = 0;
  let end = map.size - 1;
  temp = head;

  while (start <= end) {
    if (start === 0 || start === end) {
      temp.next = map.get(end);
      temp = temp.next;
    } else {
      temp.next = map.get(start);
      temp = temp.next;
      temp.next = map.get(end);
      temp = temp.next;
    }

    temp.next = null;
    start++;
    end--;
  }
};
