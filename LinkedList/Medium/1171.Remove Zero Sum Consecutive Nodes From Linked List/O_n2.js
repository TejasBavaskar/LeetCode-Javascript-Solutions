//O(n^2)
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode();
  dummy.next = head;

  for (let i = dummy; i !== null; i = i.next) {
    let sum = 0;
    for (let j = i.next; j !== null; j = j.next) {
      sum += j.val;
      if (sum === 0) {
        i.next = j.next;
      }
    }
  }

  return dummy.next;
};
