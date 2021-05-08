//O(n)
var reformatNumber = function(number) {
  let result = [];
  number = number.replace(/[\s-]/g, '');
  
  while(number.length > 4) {
      result.push(number.substring(0, 3));
      result.push('-');
      number = number.substring(3);
  }
  
  if(number.length === 4) {
      result.push(number.substring(0, 2));
      result.push('-');
      result.push(number.substring(2));
  } else {
      result.push(number);
  }
      
  return result.join('');   
};