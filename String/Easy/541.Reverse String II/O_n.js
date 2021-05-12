//O(n) in case k=1
var reverseStr = function(s, k) {
  let result = '';
  let  i= 0;
  let limit = 2 * k;          //4
  while(i <= s.length) {
      let tempStr = s.substr(i, limit);
      
      if(tempStr.length === limit || (tempStr.length < limit && tempStr.length >= k)) {
          tempStr = tempStr.substr(0, k)
                     .split('').reverse()
                     .join('')
                     .concat(tempStr.substr(k, tempStr.length));
          result += tempStr;
      } else if(tempStr.length < k) {
          result += tempStr.split('').reverse().join('');
      }
      
      i += limit;
  }
  
  return result;
};