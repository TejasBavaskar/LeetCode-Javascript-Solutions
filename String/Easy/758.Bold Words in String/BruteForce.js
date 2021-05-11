//O(m*n + k)
var boldWords = function(words, S) {
  let result = [];
  let traceArr = new Array(S.length).fill(0);
  
  words.forEach(word => {                             //m = no. of words
      let idx = S.indexOf(word);
      
      while(idx > -1) {                               //m*n    n = no. of times m repeats
          traceArr.fill(1, idx, word.length+idx);
          idx = S.indexOf(word, idx+1);
      }      
  })
  
  for(let i=0; i<traceArr.length; i++) {  //k    k = length of string
      if(traceArr[i] && (traceArr[i-1] === 0 || i === 0)) {
          result.push('<b>');
      }
      
      if(traceArr[i-1] && traceArr[i] === 0 && i > 0) {
          result.push('</b>');
      }
      result.push(S[i]);
  }
  
  if(traceArr[S.length-1]) {
      result.push('</b>');
  }
  
  return result.join('');
};