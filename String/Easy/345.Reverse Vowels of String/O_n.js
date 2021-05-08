//O(n)
var reverseVowels = function(s) {
  let i = 0;
  let j = s.length-1;
  let vowels = ['a','e','i','o','u'];
  
  s = s.split('');
  while(i < j) {
      while(!vowels.includes(s[i].toLowerCase()) && i<j) {
          i++;
      }
      
      while(!vowels.includes(s[j].toLowerCase()) && i<j) {
          j--;
      }
      
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      
      i++;
      j--;
  }
  
  return s.join('');
};