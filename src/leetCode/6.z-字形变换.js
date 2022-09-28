/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {


    if (!s.length || s.length <= numRows || numRows === 1) {
        return s
    }

    var arr = Array.from(Array(numRows), () => '')

    for (let i = 0; i < s.length; i++) {
        const groupLen = 2 * numRows - 2
        let remainder = i % groupLen // 余数

        if (remainder < numRows - 1) {
            arr[remainder] += s[i]
        } else {
            arr[groupLen - remainder] += s[i]
        }
    }



    return arr.join('')
};
// @lc code=end

