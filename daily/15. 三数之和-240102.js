/*
 * @Author: hexp 
 * @Date: 2024-01-02 21:35:31 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-02 23:15:27
 */

/* 
中等

给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 
示示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。


提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 方法一
 * 暴力三重循环
 * 择出重复的三元组：先排序，转字符串，再new Set，再转回数组
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const a = nums[i], b = nums[j], c = nums[k]
        if (a + b + c === 0) {
          arr.push([a, b, c].sort().toString())
        }
      }
    }
  }
  return [...new Set(arr)].map(t => t.split(',').map(z => Number(z)))
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

/**
 * 方法二
 * 排序+双指针，固定一个数据，再循环，时间复杂度：O(n^2)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue // ⭐️ 为i-1时已算过一次，排除nums[i-1]==nums[i]
    let l = i + 1, r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum == 0) {
        arr.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] == nums[l + 1]) l++ // 去重
        while (l < r && nums[r] == nums[r - 1]) r-- // 去重
        l++
        r--
      } else if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      }
    }
  }
  return arr
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))