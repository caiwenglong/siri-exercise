/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let left = right = length = maxLength = 0
    let set = new Set()
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            right++
            length++
            if (length > maxLength) {
                maxLength = length
            }
        } else {
            set.delete(s[left])
            left++
            length--

        }
    }
    return maxLength
};
// @lc code=end

