/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isOpposite = (s1, s2) => {
  if (s1 === '(' && s2 === ')') return true;
  if (s1 === '{' && s2 === '}') return true;
  if (s1 === '[' && s2 === ']') return true;
  return false;
};

var isValid = function (s) {
  if (s.length === 1) return false;
  const stack = [];
  for (const c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    }
    if (c === ')' || c === '}' || c === ']') {
      const last = stack.pop();
      if (!isOpposite(last, c)) return false;
    }
  }
  return stack.length === 0;
};
