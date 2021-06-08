//O(n^2) => Top Down recursive
var minCostClimbingStairs = function(cost) {
  var findMinCost = function(step, cost) {
      if(step <=1) {
          return 0;
      }
      
      let temp1 = cost[step-1] + findMinCost(step-1, cost);
      let temp2 = cost[step-2] + findMinCost(step-2, cost);
      
      return Math.min(temp1, temp2);
  }
  
  return findMinCost(cost.length, cost);
};