//O(n)
var shortestDistance = function(wordsDict, word1, word2) {
  let minDistance = Number.MAX_VALUE;
  let d1 = -1;
  let d2 = -1;
  for(let i=0; i<wordsDict.length; i++) {
      if(wordsDict[i] === word1) {
          d1 = i;
      } else if(wordsDict[i] === word2) {
          d2 = i;
      }
      
      if(d1 !== -1 && d2 !== -1)
          minDistance = Math.min(minDistance, Math.abs(d1-d2));
  }
  
  return minDistance;
};