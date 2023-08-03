/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString();
  const reverseStr = (str) => {
    let rev = '';
    for (let i = str.length - 1; i >= 0; --i) {
      rev += str[i];
    }
    console.log(rev);
    return rev;
  };
  return str === reverseStr(str);
};
