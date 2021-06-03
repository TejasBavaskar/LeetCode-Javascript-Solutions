//O(n)  => using two pointer
var middleNode = function (head) {
  let temp1 = head;
  let temp2 = head;

  while (temp1 && temp2 && temp2.next) {
    temp1 = temp1.next;
    temp2 = temp2.next.next;
  }

  return temp1;
};

//------------ OR -------------
//O(n)
var middleNode = function (head) {
  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    temp = temp.next;
  }

  let limit = Math.floor(count / 2);
  temp = head;
  while (limit) {
    temp = temp.next;
    limit--;
  }

  return temp;
};

//--------------- OR --------------
//O(n) => Using Array, O(n) space comlpexity
var middleNode = function (head) {
  let temp = head;
  let result = [];

  while (temp) {
    result.push(temp);
    temp = temp.next;
  }

  return result[Math.floor(result.length / 2)];
};
