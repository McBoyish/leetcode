/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.
*/

// using this formula dp[row, col] = dp[row + 1][col] + dp[row][col + 1]
// total paths at a space = total paths from down + total paths from right
// total paths for spaces are saved in an array (dynamic programming)
const totalPaths = (obstacleGrid, row, col, dp) => {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // out of bounds
  if (row >= m || col >= n) return 0;

  // base case, value at bottom right grid is 1
  if (row === m - 1 && col === n - 1) {
    dp[row][col] = 1;
    return 1;
  }

  // already saved total paths
  if (dp[row][col] !== -1) return dp[row][col];

  // obstacle
  if (obstacleGrid[row][col] === 1) return 0;

  dp[row][col] =
    totalPaths(obstacleGrid, row + 1, col, dp) +
    totalPaths(obstacleGrid, row, col + 1, dp);

  return dp[row][col];
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  if (obstacleGrid[m - 1][n - 1] == 1) return 0;
  if (obstacleGrid[0][0] === 1) return 0;
  let dp = [];
  for (let i = 0; i < obstacleGrid.length; ++i) {
    dp.push(new Array(obstacleGrid[i].length));
    dp[i].fill(-1);
  }
  totalPaths(obstacleGrid, 0, 0, dp);
  return dp[0][0];
};
