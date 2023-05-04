/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 升序排序
    nums.sort((a, b) => a - b);
    // 初始化一个最小值
    let min = Infinity;
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        // 定义左右指针
        let left = i + 1, right = len - 1;
        while (left < right) {
            // 当前三数之和
            const sum = nums[i] + nums[left] + nums[right];
            // 如果当前和更接近，更新最小值
            if (Math.abs(sum - target) < Math.abs(min - target)) {
                min = sum;
            }
            // 根据sum和target的关系，移动指针
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // sum和target相等，直接返回sum，肯定是最小的了
                return sum;
            }
        }
    }
    // 遍历结束，返回最接近的和
    return min;
};
// @lc code=end

