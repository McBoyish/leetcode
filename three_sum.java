class Solution {
  // -1 -1 -1 0 1 1 2 2
  public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<List<Integer>>();
    for (int i = 0; i < nums.length; ++i) {
      if (i == nums.length - 1)
        break;
      if (i > 0 && nums[i] == nums[i - 1])
        continue;
      int target = nums[i] * -1;
      int left = i + 1;
      int right = nums.length - 1;
      while (left < right) {
        if (left > i + 1 && nums[left] == nums[left - 1]) {
          left++;
          continue;
        }
        if (right < nums.length - 1 && nums[right] == nums[right + 1]) {
          right--;
          continue;
        }
        if (nums[left] + nums[right] == target) {
          res.add(Arrays.asList(nums[left], nums[right], nums[i]));
          left++;
          right--;
          continue;
        }
        if (nums[left] + nums[right] > target) {
          right--;
          continue;
        }
        if (nums[left] + nums[right] < target) {
          left++;
          continue;
        }
      }
    }
    return res;
  }
}