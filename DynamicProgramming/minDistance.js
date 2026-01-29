/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// 字符相等 (word1[i-1] == word2[j-1])：

// 不需要任何操作

// 操作数等于去掉这两个字符后的操作数

// dp[i][j] = dp[i-1][j-1]
const minDistance = (word1, word2) => {
    const w = word1.length
    const h = word2.length

    const dp = new Array(w + 1).fill(0).map(() => new Array(h + 1).fill(0))

    for (let i = 0; i <= w; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= h; j++) {
        dp[0][j] = j
    }

    for (let i = 1; i <= w; i++) {
        for (let j = 1; j <= h; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
            }
        }
    }
    console.log(dp)
    return dp[w][h]
}


console.log(minDistance('horse', 'ros')) //3

