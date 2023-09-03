/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let arr = [];
  arr[0] = nums[0];
  // cumulative product arr
  // ex [2, 2, 3, 4] -> [2, 4, 12, 48]
  for (let i = 1; i < nums.length; ++i) {
    arr[i] = arr[i - 1] * nums[i];
  }
  let product = 1;
  // product tracks cumulative product of numbers to the right of i
  // arr[i] = arr[i - 1] * product (left * right)
  for (let i = nums.length - 1; i > 0; --i) {
    arr[i] = product * arr[i - 1];
    product = product * nums[i];
  }
  // arr[0] will be final value of product
  // (ie product of all numbers from i >= 1)
  arr[0] = product;
  return arr;
};
