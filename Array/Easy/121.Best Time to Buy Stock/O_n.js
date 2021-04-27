//O(n)
var maxProfit = function(prices) {
  let minVal = Infinity;
  let maxProfit = 0;
  for(let i=0; i<prices.length; i++) {
      if(prices[i] < minVal) {
          minVal = prices[i];
      } else {
          maxProfit = Math.max(maxProfit, prices[i]-minVal);
      }
  }
  return maxProfit;
};