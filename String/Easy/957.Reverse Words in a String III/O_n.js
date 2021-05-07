//O(n)
var reverseWords = function(s) {
  let res = s.split(' ').map(item => {
      return item.split('').reverse().join('');
  })
  
  return res.join(' ');
};