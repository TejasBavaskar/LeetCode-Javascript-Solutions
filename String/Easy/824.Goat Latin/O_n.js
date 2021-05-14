//O(n)  n = no. of words in sentence
var toGoatLatin = function(sentence) {
  sentence = sentence.split(' ');
  let result  = [];
  count = 1;
  sentence.forEach(word => {
      if(['a','e','i','o','u'].includes(word.charAt(0).toLowerCase())) {
          result.push(word+'ma'+'a'.repeat(count));
      } else {
          result.push(word.slice(1, word.length)+word.charAt(0)+'ma'+'a'.repeat(count));
      }
      count++;
  })
  
  return result.join(' ');
};