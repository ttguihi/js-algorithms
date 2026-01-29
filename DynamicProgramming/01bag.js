const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line)
})
// 6 1
// 2 2 3 1 5 2
// 2 3 1 5 4 3

rl.on('close', () => {
    const [n, bagWeight] = input[0].split(' ').map(Number)
    const weight = input[1].split(' ').map(Number)
    const value = input[2].split(' ').map(Number)

    const dp = new Array(n).fill().map(() => new Array(bagWeight + 1).fill(0))


    for (let j = 0; j <= bagWeight; j++) {
        dp[0][j] = j >= weight[0] ? value[0] : 0
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= bagWeight; j++) {
            if (j >= weight[i]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
            else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }

    console.log(dp[n - 1][bagWeight])

})
