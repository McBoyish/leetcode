/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; ) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return Object.keys(map).length;
};
