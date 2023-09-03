/**
 * Given a string s, find the length of the longest substring
 without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  if (s.length == 1) return 1;

  let max = 0;
  let map = {};
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (!map[s[end]]) {
      map[s[end]] = true;
      let length = end - start + 1;
      if (length > max) {
        max = length;
      }
      end++;
    } else {
      map[s[start]] = false;
      start++;
    }
  }
  // sliding window, start - end, increment end, record unique characters in map, if dupe char encountered, remove from map and increment start
  //"asjrgapa"

  return max;
};
