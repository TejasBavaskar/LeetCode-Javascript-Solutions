//O(n)
var minimumAbsDifference = function(arr) {
  arr.sort((a,b) => a-b);
  let result = [];
  
  let i=0, j=1;
  let minDiff = Number.MAX_VALUE;
  while(i<arr.length && j<arr.length) {
      let diff = Math.abs(arr[i] - arr[j]);
      minDiff = Math.min(minDiff, diff);
      i++;j++;
  }
  
  
  i=0, j=1;
  while(i<arr.length && j<arr.length) {
      if(Math.abs(arr[i] - arr[j]) === minDiff) {
          result.push([arr[i],arr[j]]);
      }
      i++;j++;
  }

  return result;
};