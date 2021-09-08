//O(n^2)
var countSubstrings = function (s1) {
  let total = 0;

  var getPallindrome = function (p, q) {    
    let count = 0;
    while (p >= 0 && q < s1.length) {
      if (s1[p] === s1[q]) {
        count++;
        p--;
        q++;
      } else {
        break;
      }
    }
    return count;
  };

  for (let i = 0; i < s1.length; i++) {     //n
    total += getPallindrome(i, i);      //this function will run n times
    total += getPallindrome(i, i + 1);  //this function will run n times
  }

  return total;
};
