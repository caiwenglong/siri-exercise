/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let point = 0
    x = x + ''
    const len = x.length
    if (len <= 1) {
        return true
    }

    if (len % 2 === 0) {
        if (x[len / 2] !== x[len / 2 - 1]) {
            return false
        }
        while (len / 2 + point <= len && len / 2 - 1 - point >= 0) {

            if (x[len / 2 - 1 - point] !== x[len / 2 + point]) {
                return false
            }
            point++
        }
    } else {

        while (Math.floor(len / 2) + point <= len && Math.floor(len / 2) - point >= 0) {
            if (x[Math.floor(len / 2) - point] !== x[Math.floor(len / 2) + point]) {
                return false
            }
            point++
        }
    }


    return true
};
// @lc code=end

