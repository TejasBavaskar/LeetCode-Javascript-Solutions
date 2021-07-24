//O(n)
//Space Complexity: O(n)
var partition = function (head, x) {
  if (!head || !head.next) {
    return head;
  }

  let res1 = [];
  let res2 = [];
  let temp = head;

  while (temp) {    //n
    if (temp.val < x) {
      let prev = res1.pop();
      if (prev) {
        prev.next = temp;
        res1.push(prev);
      }
      res1.push(temp);
    } else {
      let prev = res2.pop();
      if (prev) {
        prev.next = temp;
        res2.push(prev);
      }
      res2.push(temp);
    }
    let prevNode = temp;
    temp = temp.next;
    prevNode.next = null;
  }

  if (res1.length === 0) {
    return res2[0];
  }

  res1[res1.length - 1].next = res2[0] ? res2[0] : null;
  return res1[0];
};
