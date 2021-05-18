var lengthOfLastWord = function(s) {
  s = s.trim(' ').split(' ');
  return s.length ? s[s.length-1].length : 0;
};