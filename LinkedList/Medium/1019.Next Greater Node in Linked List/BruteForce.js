//O(n^2)
var nextLargerNodes = function (head) {
  if (!head) {
    return [];
  }

  let res = [];
  let current = head;

  while (current) {     //n
    let temp = current.next;
    let ans = 0;
    while (temp) {    //n-1
      if (temp.val > current.val) {
        ans = temp.val;
        break;
      }
      temp = temp.next;
    }
    res.push(ans);
    current = current.next;
  }

  return res;
};
