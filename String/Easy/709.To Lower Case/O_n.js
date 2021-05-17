//O(n)
var toLowerCase = function(str) {
  str = str.split('');
  for(let i=0; i<str.length; i++) {
      if(str[i].charCodeAt(0) >= '65' && str[i].charCodeAt(0) <='90') {
          console.log(97 + parseInt(str[i].charCodeAt(0)) - 65)
          str[i] = String.fromCharCode(97 + parseInt(str[i].charCodeAt(0)) - 65);
      }
  }
  return str.join('');
};