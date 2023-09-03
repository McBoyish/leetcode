/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

const merge = (str1, str2) => {
  let length = str1.length < str2.length ? str1.length : str2.length;
  let i = 0;
  let res = '';
  while (str1[i] === str2[i] && i < length) {
    res += str1[i];
    ++i;
  }
  return res;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let res = strs[0];
  for (let i = 1; i < strs.length; ++i) {
    res = merge(res, strs[i]);
  }
  return res;
};
