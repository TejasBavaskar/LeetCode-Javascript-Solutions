//O(n)
var slowestKey = function(releaseTimes, keysPressed) {
  let maxTime = releaseTimes[0];
  let maxChar = keysPressed[0];
  
  for(let i=1; i<releaseTimes.length; i++) {
      let tempTime = releaseTimes[i] - releaseTimes[i-1];
      if(tempTime > maxTime) {
          maxTime = tempTime;
          maxChar = keysPressed[i];
      } else {
          if(maxTime === tempTime && keysPressed[i] > maxChar) {
              maxChar = keysPressed[i];
          }
      }
  }
  
  return maxChar;
};