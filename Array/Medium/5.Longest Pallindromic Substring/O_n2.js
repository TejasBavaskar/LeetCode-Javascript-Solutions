//O(n^2)
var longestPalindrome = function (s1) {
  let result = "";

  var getPallindrome = function (p, q) {
    while (p >= 0 && q < s1.length) {
      if (s1[p] === s1[q]) {
        p--;
        q++;
      } else {
        return s1.substring(p + 1, q);
      }
    }
    return s1.substring(p + 1, q);
  };

  for (let i = 0; i < s1.length; i++) {     //n
    let odd = getPallindrome(i, i);         //------\   n
    let even = getPallindrome(i, i + 1);    //------/

    if (result.length < odd.length) {
      result = odd;
    }

    if (result.length < even.length) {
      result = even;
    }
  }

  return result;
};
