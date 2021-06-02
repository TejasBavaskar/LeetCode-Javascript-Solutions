//O(n) => using extra space O(n)
var isPalindrome = function(head) {
  let arr = [];
  
  let temp = head;
  while(temp) {
      arr.push(temp.val);
      temp = temp.next;
  }
  
  return JSON.stringify(arr) === JSON.stringify(arr.reverse());
};

//-------------- OR ---------------
// O(n) => Reursive
var isPalindrome = function(head) {
  let temp = head;
  
  var traverse = function(head) {
      if(!head) {
          return true;
      }
      
      if(traverse(head.next)) {
          if(temp.val === head.val) {
              temp = temp.next;
              return true;
          } else {
              return false;
          }
      } else {
          return false;
      }
  }
  
  return traverse(temp);
};