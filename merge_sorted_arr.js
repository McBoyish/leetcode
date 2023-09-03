/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  while (m > 0 && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      i++;
      m--;
    } else {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    }
  }
  for (let z = 0; z < n; ++z) {
    nums1.pop();
  }
  while (j < n) {
    nums1.push(nums2[j]);
    ++j;
  }
};
