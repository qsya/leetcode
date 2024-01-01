/*
 * @Author: hexp 
 * @Date: 2023-05-10 14:20:10 
 * @Last Modified by: hexp
 * @Last Modified time: 2023-05-10 17:30:58
 */


/* 
中等

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]
 

提示：

1 <= n <= 20

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/spiral-matrix-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function (n) {
//   const res = new Array(n).fill(new Array(n).fill(0))
//   let i = 0, j = 0, cur = 2
//   res[0][0] = 1
//   while (cur <= n * n) {
//     console.log(j, i, cur)
//     while (j < n - 1 && res[i][j + 1] === 0) res[i][++j] = cur++ // 右
//     while (i < n - 1 && res[i + 1][j] === 0) res[++i][j] = cur++ // 下
//     while (j > 0 && res[i][j - 1] === 0) res[i][--j] = cur++ // 左
//     while (i > 0 && res[i - 1][j] === 0) res[--i][j] = cur++ // 上
//   }
//   return res
// }
var generateMatrix = function (n) {
  const res = new Array(n).fill('').map(t => new Array(n).fill(0))
  let i = 0, j = 0, cur = 2
  res[0][0] = 1
  while (cur <= n * n) {
    while (j < n - 1 && res[i][j + 1] === 0) res[i][++j] = cur++ // 右
    while (i < n - 1 && res[i + 1][j] === 0) res[++i][j] = cur++ // 下
    while (j > 0 && res[i][j - 1] === 0) res[i][--j] = cur++ // 左
    while (i > 0 && res[i - 1][j] === 0) res[--i][j] = cur++ // 上
  }
  return res
}


console.log(generateMatrix(3))