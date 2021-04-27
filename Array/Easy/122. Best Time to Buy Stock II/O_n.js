//O(n)
var maxProfit = function(prices) {
  let maxProfit = 0;
  let i = 0;
  let j = 1;
  
  while( i < prices.length && j < prices.length) {
      if(prices[i] < prices[j]) {
          maxProfit += prices[j] - prices[i];
      }
      i++;
      j++;
  }
  
  
  return maxProfit;
  
};

//---------------- OR ---------------------------

var maxProfit = function(prices) {
  let maxProfit = 0;
  let buy = prices[0]; 
  let sell = prices[0];
  let i = 0;
  while(i < prices.length-1) {
      while(prices[i] >= prices[i+1] && i<prices.length-1) {
          i++;
      }
      buy = prices[i];
      
      while(prices[i] <= prices[i+1] && i<prices.length-1) {
          i++;
      }
      sell = prices[i];
      
      maxProfit += sell - buy;
  }
  
  return maxProfit;
};

          