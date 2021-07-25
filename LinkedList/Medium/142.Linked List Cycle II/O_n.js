//O(n) => Using Two Pointers
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;

    if (slow === fast) {
      break;
    }
  }

  slow = head;
  while (slow && fast) {
    if (slow === fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return null;
};
