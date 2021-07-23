//O(nlogn) => Using Merge Sort
var sortList = function (head) {
  var getMid = function (node) {
    let prev = null;
    let p1 = node;
    let p2 = node;

    while (p2 && p2.next) {
      prev = p1;
      p1 = p1.next;
      p2 = p2.next.next;
    }

    prev.next = null;
    return p1;
  };

  var merge = function (l1, l2) {
    let dummy = new ListNode();
    let temp = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        temp.next = l1;
        l1 = l1.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
      }
      temp = temp.next;
    }

    temp.next = !l1 ? l2 : l1;
    return dummy.next;
  };

  var sort = function (node) {
    if (!node || !node.next) {
      return node;
    }

    let mid = getMid(node);
    let left = sort(node);
    let right = sort(mid);

    return merge(left, right);
  };

  return sort(head);
};
