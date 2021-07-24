//O(n)  =>  Using Array
//Space Complexity: O(n)
var swapPairs = function (head) {
  if (!head) {
    return head;
  }

  let arr = [];
  let temp = head;

  while (temp) {  //n
    arr.push(temp);
    temp = temp.next;
  }

  let index = 0;
  let prev = -1;

  while (arr[index]) {  //n
    if (arr[index + 1]) {
      arr[index + 1].next = arr[index];
      if (index === 0) {
        head = arr[index + 1];
      }
    }

    if (prev >= 0) {
      arr[prev].next = arr[index + 1] ? arr[index + 1] : arr[index];
    }
    arr[index].next = null;
    prev = index;
    index += 2;
  }

  return head;
};
