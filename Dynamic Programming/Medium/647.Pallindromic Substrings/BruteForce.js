//O(n^3)
var countSubstrings = function (s1) {
  let count = 0;

  var isPallindrome = function (p, q) {
    while (p <= q) {
      if (s1[p] === s1[q]) {
        p++;
        q--;
      } else {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s1.length; i++) {     //n
    for (let j = i; j < s1.length; j++) {   //n
      if (isPallindrome(i, j)) {            //n
        count++;
      }
    }
  }

  return count;
};
