//O(n + m) => Iterative
var getIntersectionNode = function(headA, headB) {
  let temp1 = headA;
  let count1 = 0;
  
  while(temp1) {
      count1++;
      temp1 = temp1.next;
  }
  
  let temp2 = headB;
  let count2 = 0;
  
  while(temp2) {
      count2++;
      temp2 = temp2.next;
  }

  temp1 = headA;
  temp2 = headB;
  
  if(count1 > count2) {
      let diff = count1 - count2;
      while(diff) {
          temp1 = temp1.next;
          diff--;
      }
  } else if(count2 > count1) {
      let diff = count2 - count1;
      while(diff) {
          temp2 = temp2.next;
          diff--;
      }
  }
  
  while(temp1 && temp2) {
      if(temp1 === temp2) {
          return temp1;
      }
      temp1 = temp1.next;
      temp2 = temp2.next;
  }
  
  return null;
};

//---------- OR ----------
//O(n + m) with array extra space
var getIntersectionNode = function(headA, headB) {
  let temp1 = headA;
  let result = [];
  
  while(temp1) {
      result.push(temp1);
      temp1 = temp1.next;
  }
  
  let temp2 = headB;
  while(temp2) {
      if(result.includes(temp2)) {
          return temp2;
      }
      temp2 = temp2.next;
  }
  
  return null;
};

//------------- OR ------------
//O(n + m) => using Set
var getIntersectionNode = function(headA, headB) {
  let list = new Set();
  
  let temp1 = headA;
  while(temp1) {
      list.add(temp1);
      temp1 = temp1.next;
  }
  
  let temp2 = headB;
  while(temp2) {
      if(list.has(temp2)) {
          return temp2;
      }
      temp2 = temp2.next;
  }
  
  return null;
};