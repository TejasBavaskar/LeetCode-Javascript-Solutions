//O(n^2)
var findJudge = function(n, trust) {
  if(trust.length < n-1) {
      return -1;
  }
  
  let dict = {};
  
  for(let i=0; i<trust.length; i++) { //m
      if(!(trust[i][0] in dict)) {
          dict[trust[i][0]] = [];
      }
      
      dict[trust[i][0]].push(trust[i][1]);
  }
  
  for(let i=1; i<=n; i++) { //n
      let found = true;
      if(!(i in dict)) {
          for(let j=1; j<=n; j++) { //n
              if(i !== j) {
                  if(!dict[j]) {
                      found = false;
                      break;
                  }
                  if(!dict[j].includes(i)) {
                      found = false;
                      break;
                  }
              }
          }
          
          if(found === true) {
              return i;
          }
      }
  }
  
  return -1;
};
