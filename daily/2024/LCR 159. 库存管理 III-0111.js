/*
 * @Author: hexp 
 * @Date: 2024-01-11 22:41:23 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-12 23:22:05
 */

/* 
简单

仓库管理员以数组 stock 形式记录商品库存表，其中 stock[i] 表示对应商品库存余量。请返回库存余量最少的 cnt 个商品余量，返回 顺序不限。

 

示例 1：

输入：stock = [2,5,7,4], cnt = 1
输出：[2]
示例 2：

输入：stock = [0,2,3,6], cnt = 2
输出：[0,2] 或 [2,0]


提示：

0 <= cnt <= stock.length <= 10000

  0 <= stock[i] <= 10000


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
  stock.sort().length = cnt
  return stock
}

console.log(inventoryManagement([2, 5, 7, 4], 1))

/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function (stock, cnt) {
  // 计数排序 用空间换时间
  const bucket = new Array(10000)
  const length = stock.length
  const res = []
  for (let i = 0; i < length; i++) {
    if (bucket[stock[i]]) bucket[stock[i]]++
    else bucket[stock[i]] = 1
  }
  for (let j = 0; j < bucket.length; j++) {
    while (bucket[j]-- > 0 && res.length < cnt) {
      res.push(j)
    }
    if (res.length === cnt) break
  }
  return res
}

console.log(inventoryManagement([2, 5, 2, 7, 4], 2))