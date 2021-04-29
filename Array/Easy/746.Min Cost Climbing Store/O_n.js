//O(n)
var minCostClimbingStairs = function(cost) {
  let arr = Array(cost.length).fill(0);
  for(let i=2; i<=cost.length; i++) {
     arr[i] = Math.min(cost[i-2] + arr[i-2], cost[i- 1] + arr[i-1]);
  }
  console.log(arr)
  return arr.pop();
};

//--------- OR ---------------
//O(n)
var minCostClimbingStairs = function(cost) {
  for(let i=2; i<cost.length; i++) {
     cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1]);
  }

  return Math.min(cost[cost.length-1], cost[cost.length-2]);
};