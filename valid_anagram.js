/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map1 = {};
  const map2 = {};

  for (const ch of s) {
    if (!map1[ch]) {
      map1[ch] = 1;
    } else {
      map1[ch]++;
    }
  }

  for (const ch of t) {
    if (!map2[ch]) {
      map2[ch] = 1;
    } else {
      map2[ch]++;
    }
  }

  const keys1 = Object.keys(map1);
  const keys2 = Object.keys(map2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!map2[key]) return false;
    if (map1[key] !== map2[key]) return false;
  }
  return true;
};
