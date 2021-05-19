//O(n)
var buddyStrings = function(a, b) {
  if(a.length !== b.length) {   //if both string of diff length then return false
      return false;
  }
  
  let dict1 = {};
  for(const char of a) {
      if(char in dict1) {
          dict1[char]++;
      } else {
          dict1[char] = 1;
      }
  }
  
  let dict2 = {};
  for(const char of b) {
      if(char in dict2) {
          dict2[char]++;
      } else {
          dict2[char] = 1;
      }
  }
  
  console.log(dict1)
      console.log(dict2)
  
  if(a.localeCompare(b) === 0) {    //if both strings content are identical and atleast 1 char must have count > 1
                                    //if all chars have count as 1 then swapping is not possible as both string contents are same. 
      if(Object.values(dict1).some(item => item > 1)) {
          return true;
      } else {
          return false;
      }
  }
  
  //---- If both string length is same but both string content is not same -----
  let val1 = Object.values(dict1);
  let val2 = Object.values(dict2);

  for(const prop in dict1) {    //if for each char in a, same char in b should also have same count otherwise false
      if(dict1[prop] !== dict2[prop]) {
          return false;
      }
  }
  
  let errorCount = 0;
  
  // if every char from both string has same count then need to check the number of swapings.
  //Atmost 2 swapping allowed.
  for(let i=0; i<a.length; i++) {
      if(a[i] !== b[i]) {
          errorCount++;
      }
      if(errorCount == 3) {
          return false;
      }
  }
  
  return true;
};
