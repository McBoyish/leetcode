/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  let negative = x < 0;
  if (negative) {
    x *= -1;
  }
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  reverse = negative ? -1 * reverse : reverse;
  if (reverse > 2147483647 || reverse < -2147483648) return 0;
  return reverse;
};
