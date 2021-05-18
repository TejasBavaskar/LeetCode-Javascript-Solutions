//O(n)
var isPathCrossing = function(path) {
  let origin = [0,0];
  let dict = {};
  dict[JSON.stringify(origin)] = 1;
  
  for(let i=0; i<path.length; i++) {
      if(path[i] === 'N') {
          origin[1]++;
      } else if(path[i] === 'E') {
          origin[0]++;
      }else if(path[i] === 'S') {
          origin[1]--;
      } else if(path[i] === 'W') {
          origin[0]--;
      }
      
      if(JSON.stringify(origin) in dict) {
          return true;
      } else {
          dict[JSON.stringify(origin)] = 1;
      }

  }

  return false;
};