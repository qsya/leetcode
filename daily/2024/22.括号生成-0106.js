/*
 * @Author: hexp 
 * @Date: 2024-01-06 22:36:35 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-06 23:52:14
 */

/* 
中等

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 

提示：

1 <= n <= 8

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/generate-parentheses/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const m = n * 2
  let arr = []
  let brr = Array(m)
  const dfs = (i, flag) => {
    if (i === m) {
      arr.push(brr.join(""))
      return
    }
    if (flag < n) {
      brr[i] = '('
      dfs(i + 1, flag + 1)
    }
    if (i - flag < flag) {
      brr[i] = ")"
      dfs(i + 1, flag)
    }
  }
  dfs(0, 0)
  return arr
}

console.log(generateParenthesis(3))

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // return 3
}

console.log(generateParenthesis(3))