//O(n + k)
var splitListToParts = function (head, k) {
  let temp = head;
  let count = 0;
  while (temp) {    //n
    count++;
    temp = temp.next;
  }

  let result = [];
  let div = Math.floor(count / k);
  let rem = count % k;
  temp = head;
  let prev = null;

  for (let i = 0; i < k; i++) {   //k
    let ans = [];
    let index = 0;
    while (temp && index < div) {   
      prev = temp;
      temp = temp.next;
      index++;
    }
    if (rem) {
      prev = temp;
      temp = temp.next;
      rem--;
    }

    if (prev) {
      prev.next = null;
    }
    result.push(head);
    head = temp;
  }

  return result;
};
