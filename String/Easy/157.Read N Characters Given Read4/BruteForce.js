/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
      let eof = false;
      let  j = 0;
      
      while(!eof) {
          let temp = [];
          read4(temp);
          
          for(let i=0; i<temp.length  && j < n; i++) {
              buf[j] = temp[i]
              j++;
          }
          
          if(temp.length < 4) {
              eof = true;
          }
      }
      return j;
  };
};