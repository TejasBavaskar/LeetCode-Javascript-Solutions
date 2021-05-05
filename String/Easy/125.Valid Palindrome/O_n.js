//O(n)
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let res = s.split('').reverse().join('');
  console.log(res);
  if(s === res) {
      return true;
  }
  return false;
};

//-------- OR ---------------
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length-1;
  s = s.toLowerCase();
  while(i <= j) {
      while((s.charCodeAt(i) < 97 || s.charCodeAt(i) > 122) && (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57)) {
          i++;
      }
      
      while((s.charCodeAt(j) < 97 || s.charCodeAt(j) > 122) && (s.charCodeAt(j) < 48 || s.charCodeAt(j) > 57)) {
          j--;
      }
      console.log(s[i], s[j]);
      
      if(s[i] === s[j]) {
          i++;
          j--;
      } else {
          return false;
      }
  }
  return true;
};