//O(n)
var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length-1;
  
  while(i<numbers.length && j>=0) {
      let sum = numbers[i] + numbers[j];
      if(sum === target) {
          return [i+1, j+1]; 
      } else if(sum < target) {
          i++;
      } else {
          j--;
      }
  }
};