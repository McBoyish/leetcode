class Solution {
  private int recurse(int i, int j, int m, int n, int[][] dp) {
    if (i >= m || j >= n)
      return 0;
    if (i == m - 1 && j == n - 1) {
      dp[i][j] = 1;
      return 1;
    }

    if (dp[i][j] != -1)
      return dp[i][j];

    dp[i][j] = recurse(i + 1, j, m, n, dp) + recurse(i, j + 1, m, n, dp);
    return dp[i][j];
  }

  public int uniquePaths(int m, int n) {
    // dp[row][col] = dp[row + 1][col] + dp[row][col + 1]
    int[][] dp = new int[m][n];
    for (int i = 0; i < m; ++i) {
      for (int j = 0; j < n; ++j) {
        dp[i][j] = -1;
      }
    }
    return recurse(0, 0, m, n, dp);
  }
}