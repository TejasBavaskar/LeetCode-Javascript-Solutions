//O(n^2)
var sumOddLengthSubarrays = function(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
      let count = 0;
      let sum = 0;
      for(let j=i; j<arr.length; j++) {
          sum += arr[j];
          count++;
          if(count % 2 !== 0) {
              result.push(sum);
          }
      }
  }

  return result.reduce((sum, item) => sum+=item);
};