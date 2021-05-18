//O(n)
var arrayStringsAreEqual = function(word1, word2) {
  let str1 = word1.reduce((s1, word) => {
      s1 += word;
      return s1;
  }, '');
  
  let str2 = word2.reduce((s2, word) => {
      s2 += word;
      return s2;
  }, '');
  
  return str1.localeCompare(str2)===0 ? true : false;
};

//------------ OR ------------
var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};