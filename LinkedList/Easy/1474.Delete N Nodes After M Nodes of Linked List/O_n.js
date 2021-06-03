//O(n)
var deleteNodes = function (head, m, n) {
  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    if (count === m) {
      let p1 = temp;
      let size = n;
      while (p1 && size) {
        p1 = p1.next;
        size--;
      }
      if (p1) {
        temp.next = p1.next;
      } else {
        temp.next = null;
      }

      count = 0;
    }

    temp = temp.next;
  }

  return head;
};
