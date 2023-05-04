/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums = nums.sort((a, b) => a - b) // 给数组排序
    if (!nums || nums.length < 3) return result // 如果数组长度小于3 则直接返回

    for (let i = 0; i < nums.length; i++) {

        // 如果是最小的一个数大于0 那么接下来的数相加肯定大于0
        if (nums[i] > 0) return result

        // 如果nums[i] === nums[i+1] 则继续
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let L = i + 1
        let R = nums.length - 1
        // [-1, -1, 0, 1, 2, 4]
        while (L < R) {
            if (nums[i] + nums[L] + nums[R] < 0) {
                L++
            } else if (nums[i] + nums[L] + nums[R] > 0) {
                R--
            } else {
                result.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                while (L < R && nums[R] == nums[R - 1]) R--; // 去重
                L++
                R--
            }
        }
    }

    return result;
};
// @lc code=end

