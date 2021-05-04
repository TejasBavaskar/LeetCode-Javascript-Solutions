//O(m*klogk)
var reorderLogFiles = function(logs) {
  let letLog = [];
  let digLog = [];
  
  logs.forEach(log => {
      if(log.split(' ').slice(1, log.length).join(' ').match(/[0-9]/g)) {
          digLog.push(log);
      } else {
          letLog.push(log);
      }
  })
  
  letLog.sort((a,b) => {
      if(a===b)
          return 0;
      else if(a<b)
          return -1;
      else 
          return 1;
  })
  
  letLog.sort((a,b) => {
      let t1 = a;
      let t2 = b;
      t1 = t1.split(' ').slice(1, t1.length).join(' ');
      t2 = t2.split(' ').slice(1, t2.length).join(' ');
      
      if(t1 === t2)
          return 0;
      else if(t1 < t2)
          return -1;
      else
          return 1;

  })

  return letLog.concat(digLog);
};