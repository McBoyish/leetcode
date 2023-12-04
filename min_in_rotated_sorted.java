class Solution {
  public int findMin(int[] nums) {
      int left = 0;
      int right = nums.length - 1;

      if (nums[right] > nums[left]) {
        return nums[left];
      }

      while (left <= right) {
          int mid = left + (right - left)/2;
          int prev = (mid - 1) % nums.length;
          if (prev < 0) {
            prev += nums.length;
          }
          int next = (mid + 1) % nums.length;

          if (nums[prev] > nums[mid] && nums[next] > nums[mid]) {
            return nums[mid];
          }

          if (nums[left] <= nums[mid] && nums[mid] <= nums[right]) {
            return nums[left];
          } else if (nums[left] <= nums[mid]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }

      return -1;
  }
}