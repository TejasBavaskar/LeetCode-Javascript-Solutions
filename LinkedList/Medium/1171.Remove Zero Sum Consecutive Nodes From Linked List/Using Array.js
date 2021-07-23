//O(n^2)
//Space Complexity: O(n)
var removeZeroSumSublists = function (head) {
  let arr = [];
  let temp = head;

  while (temp) {      //n
    arr.push(temp);
    temp = temp.next;
  }

  for (let i = 0; i < arr.length; i++) {    //n
    let start = -1;
    let end = -1;
    let flag = false;
    if (i <= end) {
      continue;
    }

    let num = arr[i].val;
    if (num === 0) {
      arr.splice(i, 1);
      i--;
      continue;
    }

    for (let j = i + 1; j < arr.length; j++) {  //n
      num += arr[j].val;
      if (num === 0) {
        flag = true;
        start = i;
        end = j;
        break;
      }
    }

    if (flag) {
      arr.splice(start, end - start + 1);
      i--;
    }
  }

  if (arr.length === 0 || (arr.length === 1 && arr[0].val === 0)) {
    return null;
  }

  head = arr[0];
  let index = 0;

  while (arr[index]) {
    arr[index].next = arr[index + 1] ? arr[index + 1] : null;
    index++;
  }

  return head;
};
