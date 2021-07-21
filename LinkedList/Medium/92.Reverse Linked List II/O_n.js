//O(n)
var reverseBetween = function (head, left, right) {
  let temp = head;
  let lptr = null;
  let rptr = null;
  let lptrPrev = null;
  let prev = null;
  let index = 1;

  while (temp) {    //n
    if (index === left) {
      lptr = temp;
      lptrPrev = prev;
    } else if (index === right) {
      rptr = temp;
      break;
    }

    prev = temp;
    temp = temp.next;
    index++;
  }

  if (!lptr || !rptr) {
    return head;
  }

  var reverseList = function (lptr, rptr) {
    let prev = null;
    let current = lptr;
    let temp = lptr.next;

    while (prev != rptr) {  //n
      current.next = prev;
      prev = current;
      current = temp;
      temp = temp ? temp.next : null;
    }

    if (lptrPrev) {
      lptrPrev.next = rptr;
    } else {
      head = rptr;
    }

    lptr.next = current;
  };

  reverseList(lptr, rptr);

  return head;
};
