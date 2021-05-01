//O(n)
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  let result = [];
  for(let i=0; i<candies.length; i++) {
      if(candies[i] + extraCandies >= max) {
          result.push(true);
      } else {
          result.push(false);
      }
  }
  return result;
};