/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  // find indexes of 0
  let zeroIndexes = [];
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) zeroIndexes.push(i);
  }

  // loop for each 0 index
  for (let i = 0; i < zeroIndexes.length; ++i) {
    let possible = false;

    // check if any number before 0 can jump 0
    for (let j = 0; j < zeroIndexes[i]; ++j) {
      let distance = zeroIndexes[i] - j;
      let boo = zeroIndexes[i] === nums.length - 1 ? 1 : 0;
      if (nums[j] + boo > distance) {
        possible = true;
        break;
      }
    }
    if (!possible) return false;
  }

  return true;
};
