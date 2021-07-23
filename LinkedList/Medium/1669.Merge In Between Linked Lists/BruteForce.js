//O(n+m)
var mergeInBetween = function (list1, a, b, list2) {
  let p1 = null;
  let prev = null;
  let p2 = null;

  let index = -1;
  let temp = list1;

  while (temp) {  //n
    index++;
    if (index === a) {
      p1 = prev;
    }
    if (index === b) {
      p2 = temp;
      break;
    }

    prev = temp;
    temp = temp.next;
  }

  temp = list2;
  while (temp.next) {   //m
    temp = temp.next;
  }

  temp.next = p2.next;
  p1.next = list2;

  return list1;
};
