/*
 * @Author: hexp 
 * @Date: 2024-01-05 21:58:48 
 * @Last Modified by: hexp
 * @Last Modified time: 2024-01-05 23:23:40
 */

/* 
简单

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例 1：

https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/merge-two-sorted-lists/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 方法一
 * 迭代
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode()
  let cur = list
  while (list1 || list2) {
    if (list1?.val <= list2?.val || !list2) {
      cur.next = list1
      list1 = list1.next
    } else if (list2) {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  return list.next
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

/**
 * 方法二
 * 递归
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val <= list2.val) {
    console.log(list1, list2, 1)
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    console.log(list1, list2, 2)
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))