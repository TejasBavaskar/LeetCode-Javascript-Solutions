//O(log(min(m,n)))
var gcdOfStrings = function(str1, str2) {
  let m = Math.max(str1.length, str2.length);
  let n = Math.min(str1.length, str2.length);
  
  let gcdLen = GCD(m, n);
  
  let res = str1.slice(0, gcdLen);
  let temp = res.repeat(Math.floor(m / gcdLen));
  
  if(temp.indexOf(str1) != -1 && temp.indexOf(str2) != -1) {
      return res;
  }
  return '';
};

var GCD = function(len1, len2) {
  return len2 === 0 ? len1 : GCD(len2, len1 % len2);
}