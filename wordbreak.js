/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dict = {};
  let dp = {};
  for (const word of wordDict) {
    dict[word] = true;
  }
  let res = check(s, dict, dp);
  return res;
};

const check = function (s, wordDict, dp) {
  if (s === '') return true;
  if (dp[s] !== undefined) return dp[s];

  // split the string in 2 at index, and check left and right
  for (let i = 0; i < s.length; ++i) {
    let prefix = s.substring(0, i + 1);
    let suffix = s.substring(i + 1);
    // check if prefix is in dict
    // and check if suffix is in dict, if not recurse on suffix
    if (wordDict[prefix] && (wordDict[suffix] || check(suffix, wordDict, dp))) {
      // if true, then suffix can be made from words in dict
      dp[s] = true;
      return true;
    }
  }
  // if we reach here, then string s cannot be made from words in dict
  dp[s] = false;
  return false;
};
