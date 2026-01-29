const quickSort = (nums, left = 0, right = nums.length - 1) => {
    if (left >= right) return
    let i = left
    let j = right
    const pivot = nums[Math.floor((left + right) / 2)]
    while (i <= j) {
        while (nums[i] < pivot) i++
        while (nums[j] > pivot) j--
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }
    quickSort(nums, left, j)
    quickSort(nums, i, right)
    return nums
}
console.log(quickSort([7, 4, 5, 3, 6, 2, 8, 1]))  // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(quickSort([3, 2, 1, 5, 6, 4]))       // [1, 2, 3, 4, 5, 6]
console.log(quickSort([5, 2, 3, 1]))            // [1, 2, 3, 5]