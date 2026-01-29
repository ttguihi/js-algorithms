var canJump = function (nums) {
    const n = nums.length
    let maxDistance = 0
    for (let i = 0; i < n; i++) {
        if (i <= maxDistance) {
            maxDistance = Math.max(maxDistance, i + nums[i])
            if (maxDistance >= n - 1) return true
        }

    }

    return false
}

console.log(canJump([2, 3, 1, 1, 4])) //true
console.log(canJump([3, 2, 1, 0, 4])) //false