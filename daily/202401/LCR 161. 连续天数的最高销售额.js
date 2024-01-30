/*
 * @Author: hexp 
 * @Date: 2024-01-30 22:54:56 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-30 23:39:16
 */

/* 
中等

某公司每日销售额记于整数数组 sales，请返回所有 连续 一或多天销售额总和的最大值。

要求实现时间复杂度为 O(n) 的算法。

 

示例 1:

输入：sales = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：[4,-1,2,1] 此连续四天的销售总额最高，为 6。
示例 2:

输入：sales = [5,4,-1,7,8]
输出：23
解释：[5,4,-1,7,8] 此连续五天的销售总额最高，为 23。 
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function (sales) {
  const length = sales.length
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < length; i++) {
    let sum = sales[i], j = 1
    max = Math.max(max, sum)
    while (j < length - i) {
      sum += sales[i + j]
      max = Math.max(max, sum)
      j++
    }
  }
  return max
}

console.log(maxSales([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSales([0]))

/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function (sales) {
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0
  for (let i = 0; i < sales.length; i++) {
    if (sum > 0) {
      sum += sales[i]
    } else {
      sum = sales[i]
    }
    max = Math.max(max, sum)
  }
  return max
}

console.log(maxSales([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSales([0]))

/**
 * @param {number[]} sales
 * @return {number}
 */
var maxSales = function (sales) {
  let max = sales[0]
  const dp = [sales[0]]
  for (let i = 1; i < sales.length; i++) {
    dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])
    max = Math.max(max, dp[i])
  }
  return max
}

console.log(maxSales([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSales([0]))