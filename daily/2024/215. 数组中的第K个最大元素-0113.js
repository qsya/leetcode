/*
 * @Author: hexp 
 * @Date: 2024-01-13 23:00:43 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-14 00:11:53
 */

/* 
中等

仓给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1:

输入: [3,2,1,5,6,4], k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6], k = 4
输出: 4
 

提示：

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/kth-largest-element-in-an-array>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 快速排序 分而治之
// 1.找到基准
// 2.比它大的放右边，小的放左边
// 3.按1、2继续拆分，直到找到下标
var findKthLargest = function (nums, k) {
  quickSort(nums)
  return nums[nums.length - k]
}

// 左右指针，交换位置
const quickSort = (nums) => {
  quick(nums, 0, nums.length - 1)
}

const quick = (nums, left, right) => {
  if (left < right) {
    let index = partition(nums, left, right)
    if (left < index - 1) {
      quick(nums, left, index - 1)
    }
    if (right > index) {
      quick(nums, index, right)
    }
  }
}

// 找基准值
const partition = (nums, left, right) => {
  let datum = nums[Math.floor(Math.random() * (right - left + 1)) + left]
  let i = left, j = right
  while (i <= j) {
    while (nums[i] < datum) {
      i++
    }
    while (nums[j] > datum) {
      j--
    }
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i += 1
      j -= 1
    }
  }
  return i
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))