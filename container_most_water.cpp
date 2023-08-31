// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxArea = 0;
        int i = 0;
        int j = height.size() - 1;

        while (i < j) {
            int max = std::min(height[i], height[j]) * (j - i);
            if (max > maxArea) {
                maxArea = max;
            }
            // explanation: area for line at i and j, taking shorter line,
            // if you calculate area with all other lines, width will 
            // decrease, height will always be equal or less because 
            // we are doing min of the 2 lines, so no need to 
            // find area for all other lines.

            // move the shorter line
            if (height[i] < height[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
};