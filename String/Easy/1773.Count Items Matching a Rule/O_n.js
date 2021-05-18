//O(n)
var countMatches = function(items, ruleKey, ruleValue) {
  let index = -1;
  if(ruleKey === 'type') {
      index = 0;
  } else if(ruleKey === 'color') {
      index = 1;
  } else {
      index = 2;
  }
  console.log(index)
  let count = 0;
  
  items.forEach(item => {
      if(item[index] === ruleValue) {
          count++;
      }
  })
  
  return count;
};