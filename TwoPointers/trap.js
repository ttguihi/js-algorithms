var trap = function (height) {
    let leftMax = 0
    let rightMax = 0
    let ans = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= leftMax) {
                leftMax = height[l]
            } else {
                ans += leftMax - height[l]
            }
            l++
        }
        else {
            if (height[r] >= rightMax) {
                rightMax = height[r]
            } else {
                ans += rightMax - height[r]
            }
            r--
        }
    }
    return ans
}
// 想象两个人从两端向中间走，每人记住自己这边遇到的最高柱子。矮的一方向中间移动是安全的，因为知道另一边有更高的柱子可以拦住水
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))