/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const map = {};
  for (const num of nums) {
    if (!map[num]) {
      map[num] = true;
    }
  }

  let maxLength = 1;

  for (let n = 0; n < nums.length; n++) {
    let length = 1;

    if (!map[nums[n]]) continue;

    let current = nums[n];

    while (map[current - 1]) {
      length++;
      map[current - 1] = false;
      current--;
    }

    current = nums[n];
    while (map[current + 1]) {
      length++;
      map[current + 1] = false;
      current++;
    }

    if (length > maxLength) {
      maxLength = length;
    }
    // select a number, count left and right
    // remove numbers from set as we go
  }

  return maxLength;
};
