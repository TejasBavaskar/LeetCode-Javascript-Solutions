//O(n)
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length-1;
  let len = s.length-1;
 while(i <= len/2 && j >= len/2) {
     if(s[i] !== s[j]) {
         return isPalindrome(s, i+1, j) || isPalindrome(s, i, j-1);
     }
     i++;
     j--;
 }
  return true;
}

var isPalindrome = function(s, low, high) {
  while(low < high) {
      if(s[low] !== s[high]) {
          return false;
      }
      low++;
      high--;
  }
  return true;
}