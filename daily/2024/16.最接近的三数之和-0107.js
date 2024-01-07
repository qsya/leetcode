/*
 * @Author: hexp 
 * @Date: 2024-01-07 18:42:04 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-07 19:07:03
 */

/* 
中等

数给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

 

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0
 

提示：

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum-closest/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 排序，双指针
  nums = nums.sort((a, b) => a - b)
  let min, res = 0
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      const abs = Math.abs(sum - target)
      const _min = Math.min(abs, min ?? abs)
      if (_min !== min) {
        min = _min
        res = sum
      }
      if (sum === target) {
        l++
        r--
      } else if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 排序，双指针
  const length = nums.length
  nums = nums.sort((a, b) => a - b)
  let res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < length; i++) {
    let l = i + 1, r = length - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum > target) {
        r--
      } else if (sum < target) {
        l++
      } else {
        return sum
      }
    }
  }
  return res
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))