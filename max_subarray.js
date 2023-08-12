/*
Given an integer array nums, find the 
subarray with the largest sum, and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const maxElem = (nums) => {
  let max = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

var maxSubArray = function (nums) {
  const max = maxElem(nums);
  if (max < 0) return max;

  let currentMax = Number.MIN_VALUE;
  let Sum = 0;

  // calculate consecutive sum, and keep track of maximum sum so far
  // resets sum to 0 if it goes to negative
  for (let i = 0; i < nums.length; ++i) {
    Sum += nums[i];
    if (Sum > currentMax) {
      currentMax = Sum;
    }
    if (Sum < 0) {
      Sum = 0;
    }
  }

  return currentMax;
};
