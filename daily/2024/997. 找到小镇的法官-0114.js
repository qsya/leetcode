/*
 * @Author: hexp 
 * @Date: 2024-01-14 12:49:14 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-14 13:53:13
 */

/* 
简单

小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

小镇法官不会信任任何人。
每个人（除了小镇法官）都信任这位小镇法官。
只有一个人同时满足属性 1 和属性 2 。
给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

 

示例 1：

输入：n = 2, trust = [[1,2]]
输出：2
示例 2：

输入：n = 3, trust = [[1,3],[2,3]]
输出：3
示例 3：

输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1

提示：

1 <= n <= 1000
0 <= trust.length <= 104
trust[i].length == 2
trust 中的所有trust[i] = [ai, bi] 互不相同
ai != bi
1 <= ai, bi <= n

来源：力扣（LeetCode）
链接：<https://leetcode.cn/problems/find-the-town-judge>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 图 入度 n-1 出度 0
// 1.法官不信任任何人
// 2.任何人都要信任法官
var findJudge = function (n, trust) {
  const graph = Array.from({ length: n + 1 }, () => ({
    inDegree: 0,
    outDegree: 0
  }))
  trust.forEach(([a, b]) => {
    graph[a].outDegree++
    graph[b].inDegree++
  })
  return graph.findIndex((t, i) => i > 0 && t.inDegree === n - 1 && t.outDegree === 0)
}
console.log(findJudge(3, [[1, 2], [2, 3]]))
