//O(n^3)
var longestPalindrome = function (s1) {
  let result = "";

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

  for (let i = 0; i < s1.length; i++) {   //n
    for (let j = i; j < s1.length; j++) { //n
      if (isPallindrome(i, j)) {    //n
        let temp = s1.substring(i, j + 1);
        if (result.length < temp.length) {
          result = temp;
        }
      }
    }
  }

  return result;
};
