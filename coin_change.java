class Solution {
  private HashMap<Integer, Integer> dp = new HashMap<Integer, Integer>();

  public int coinChange(int[] coins, int amount) {
    if (amount == 0)
      return 0;
    if (amount < 0)
      return -1;
    if (dp.containsKey(amount))
      return dp.get(amount);
    int min = Integer.MAX_VALUE;
    for (int value : coins) {
      int n = coinChange(coins, amount - value);
      dp.put(amount - value, n);
      if (n == -1) {
        continue;
      }
      if (n + 1 < min) {
        min = n + 1;
      }
    }
    if (min == Integer.MAX_VALUE)
      return -1;
    return min;
  }
}