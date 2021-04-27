//O(n*m)
var commonChars = function(A) {
  let result = [];
  
  let first = A[0].split('');
  for(let i=1; i<A.length; i++) {
      first = first.filter(item => {
          const len = A[i].length;
          A[i] = A[i].replace(item, '');
          return len > A[i].length
      })
  }

  return first;
};