/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = x + ''
    result = result.split('')

    if (result[0] === '-') {
        result.splice(0, 1)
        result = result.reverse()
        if (parseInt(result.join('')) > 2 ** 31) {
            return 0
        }
        result.unshift('-')
        result = result.join('')

    } else {
        result = result.reverse()
        result = parseInt(result.join(''))
        if (result > 2 ** 31 - 1) {
            return 0
        }
    }

    return result

};
// @lc code=end

