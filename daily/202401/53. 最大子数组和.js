/*
 * @Author: hexp 
 * @Date: 2024-01-19 11:25:38 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-30 23:09:01
 */

/* 
中等

给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/maximum-subarray/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]
  const length = nums.length
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < length; i++) {
    let sum = nums[i], j = 1
    max = Math.max(max, sum)
    while (j < length - i) {
      sum += nums[i + j]
      max = Math.max(max, sum)
      j++
    }
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心，求和，之前和为负数直接舍弃
var maxSubArray = function (nums) {
  let result = nums[0], sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    result = Math.max(result, sum)
  }
  return result
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))