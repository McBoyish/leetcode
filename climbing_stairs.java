import java.util.HashMap;

class Solution {
  private int climb(int n, HashMap<Integer, Integer> map) {
    if (map.containsKey(n))
      return map.get(n);

    int a = climb(n - 1, map);
    if (!map.containsKey(n - 1)) {
      map.put(n - 1, a);
    }

    int b = climb(n - 2, map);
    if (!map.containsKey(n - 2)) {
      map.put(n - 2, b);
    }

    return climb(n - 1, map) + climb(n - 2, map);
  }

  public int climbStairs(int n) {
    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    map.put(2, 2);
    map.put(1, 1);
    return climb(n, map);
    // f(n) = f(n - 1) + f(n - 2)
    // f(3) = f(2) + f(1)
    // f(2) = 1
    // f(1) = 1
  }
}