//O(nlogn)
var highFive = function(items) {
  let dict = {};
  let result = [];
  for(let i=0; i< items.length; i++) {
      if(items[i][0] in dict) {
          dict[items[i][0]].push(items[i][1]);
      } else {
          dict[items[i][0]] = [];
          dict[items[i][0]].push(items[i][1]);
      }
  }
  
  for(const prop in dict) {
      dict[prop].sort(function(a, b) {
          return b-a;
      });
      let total = dict[prop].splice(0, 5).reduce((sum, item) => {
          return sum + item;
      }, 0);
      result.push([prop,Math.floor(total/5)]);
  }
  
  return result;
  
};