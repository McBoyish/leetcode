/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    else return -1;
  }
  const getMid = (start, end) => start + parseInt((end - start) / 2);
  let start = 0;
  let end = nums.length - 1;
  const last = nums[end];
  while (start < end) {
    const mid = getMid(start, end);
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    // mid = 1
    // target = 3
    // last = 3
    if (target < nums[mid] && target > last) {
      // search left
      end = mid;
    } else if (target < nums[mid] && target < last) {
      if (nums[mid] > last) {
        // search right
        start = mid + 1;
      } else if (nums[mid] < last) {
        // search left
        end = mid;
      }
    } else if (target > nums[mid] && target > last) {
      if (nums[mid] > last) {
        // search right
        start = mid + 1;
      } else if (nums[mid] < last) {
        // search left
        end = mid;
      }
    } else if (target > nums[mid] && target < last) {
      // search right
      start = mid + 1;
    }
  }
  return nums[start] === target ? start : -1;
};
