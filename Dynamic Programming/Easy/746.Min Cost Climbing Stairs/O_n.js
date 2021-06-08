//O(n)  => Bottom up dynamic programming approach
var minCostClimbingStairs = function(cost) {
  let result = Array(cost.length+1).fill(0);

  for(let i=2; i<result.length; i++) {
      let temp1 = cost[i-1] + result[i-1];
      let temp2 = cost[i-2] + result[i-2];
      
      result[i] = Math.min(temp1, temp2);
  }
  
  return result[result.length-1];
};