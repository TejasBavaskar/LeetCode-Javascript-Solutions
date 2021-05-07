//O(n)
var destCity = function(paths) {
  let originSet = new Set();
  paths.forEach(path => {
      originSet.add(path[0]);
  })
  
  for(let i=0; i<paths.length; i++) {
      if(!originSet.has(paths[i][1])) {
          return paths[i][1];
      }
  }
};

//---------------OR----------------------
var destCity = function(paths) {
  let dict = {};
  
  for(let i=0; i<paths.length; i++) {
      if(!(paths[i][0] in dict)) {
          dict[paths[i][0]] = paths[i][1];
      }
  }
  
  console.log(dict)
  for(let i=0; i<paths.length; i++) {
      if(!(paths[i][1] in dict)) {
          return paths[i][1];
      }
  }
};