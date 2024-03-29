/*
 * @Author: hexp 
 * @Date: 2024-01-12 23:26:03 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-13 22:51:35
 */

/* 
中等

仓给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 

提示：

1 <= nums.length <= 105
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的
 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/top-k-frequent-elements>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map()
  const arr = [...new Set(nums)]
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 桶排序
// 1.将数据划分到有限的桶里，再对桶排序
// map存储频次，数组表达桶，频次作为数组下标表达，针对不同频次的数字，聚合
var topKFrequent = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  if (map.size <= k) return [...map.keys()]
  return buckerSort(map, k)
}

const buckerSort = (map, k) => {
  const arr = [], res = []
  map.forEach((value, key) => {
    if (arr[value]) arr[value].push(key)
    else arr[value] = [key]
  })
  for (let i = arr.length - 1; i > 0 && res.length < k; i--) {
    if (arr[i]) res.push(...arr[i])
  }
  return res
}
console.log(topKFrequent([3, 0, 1, 0], 1))