//O(max(m,n))
var findJudge = function(n, trust) {
  if(trust.length < n-1) {
      return -1;
  }
  
  let inDegree = Array(n+1).fill(0);
  let outDegree = Array(n+1).fill(0);
  
  for(let i=0; i<trust.length; i++) { //m
      inDegree[trust[i][1]]++;
      outDegree[trust[i][0]]++;
  }
  
  for(let i=1; i<=outDegree.length; i++) {  //n
      if(outDegree[i] === 0 && inDegree[i] === n-1) {
          return i;
      }
  }
  
  return -1;
};