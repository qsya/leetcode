/*
 * @Author: hexp 
 * @Date: 2024-02-24 11:33:37 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-02-26 23:06:37
 */

/* 
简单

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
 

提示:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

进阶：你能尽量减少完成的操作次数吗？

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/move-zeroes/>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法一：找到0删除，末尾补0

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = nums.length
  while (i-- > 0) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}

// 方法二：双指针，找到非0，和慢指针交换位置

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[l]] = [nums[l], nums[i]]
      l++
    }
  }
}