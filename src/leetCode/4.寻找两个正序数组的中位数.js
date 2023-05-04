/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var newNum = nums1.concat(nums2)
    newNum.sort((a, b) => a - b)
    var value = undefined
    if (newNum.length % 2 === 0) {
        value = (newNum[newNum.length / 2] + newNum[newNum.length / 2 - 1]) / 2
    } else {
        value = newNum[Math.ceil(newNum.length / 2) - 1]
    }
    return value
};
// @lc code=end

