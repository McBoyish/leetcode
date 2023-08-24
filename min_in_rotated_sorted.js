/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  // [10, 25, 35, 1, 7, 8, 9]

  const getMid = (start, end) => start + parseInt((end - start) / 2);
  let start = 0;
  let end = nums.length - 1;
  const last = nums[end];
  while (start < end) {
    const mid = getMid(start, end);
    console.log(start, end);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (last > nums[mid]) {
      // search left
      end = mid;
    } else if (last < nums[mid]) {
      // search right
      start = mid + 1;
    }
  }
  return nums[start];
};
