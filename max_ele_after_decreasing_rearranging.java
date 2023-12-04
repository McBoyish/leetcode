import java.util.*;

class Solution {
  public int maximumElementAfterDecrementingAndRearranging(int[] arr) {
    Arrays.sort(arr);
    arr[0] = 1;
    int next = 2;
    for (int i = 1; i < arr.length; ++i) {
      if (arr[i] < next) {
        continue;
      }
      if (arr[i] == next) {
        next++;
      }
      if (arr[i] > next) {
        arr[i] = next;
        next++;
      }
    }
    return arr[arr.length - 1];
  }
}