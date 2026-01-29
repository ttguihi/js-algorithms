/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    let left = 0
    let right = nums.length - 1
    const target = nums.length - k

    while (true) {
        const pivot = nums[(left + right) >> 1]
        let i = left
        let j = right
        while (i <= j) {
            while (nums[i] < pivot) i++
            while (nums[j] > pivot) j--
            if (i <= j) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
                j--
            }
        }

        if (target <= j) {
            right = j
        } else if (target >= i) {
            left = i
        } else {
            return nums[target]
        }
    }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))