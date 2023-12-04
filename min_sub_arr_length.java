class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        if (nums.length == 1) {
            if (nums[0] >= target) return 1;
            else return 0;
        }

        int minLength = Integer.MAX_VALUE;
        int left = 0;
        int right = 0;
        int sum = 0;

        while (left <= right && right < nums.length) {
            sum += nums[right];
            while (left <= right && sum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                sum -= nums[left];
                left++;
            }
            right++;
        }
        if (minLength == Integer.MAX_VALUE) return 0;
        return minLength;
    }
}