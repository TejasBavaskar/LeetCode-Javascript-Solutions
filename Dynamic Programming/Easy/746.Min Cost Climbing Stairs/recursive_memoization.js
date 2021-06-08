//O(n) => Top Down recursive + memoization
var minCostClimbingStairs = function(cost) {
  let dict = {};
  
  var findMinCost = function(step, cost) {
      if(step <=1) {
          return 0;
      }
      
      if(step in dict) {
          return dict[step];
      }
            
      let temp1 = cost[step-1] + findMinCost(step-1, cost);
      let temp2 = cost[step-2] + findMinCost(step-2, cost);
      
      let ans = Math.min(temp1, temp2);
      dict[step] = ans;
      
      return ans;
  }
  
  let x = findMinCost(cost.length, cost);
  return x;
};