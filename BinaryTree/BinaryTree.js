class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }

}
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.right = new TreeNode(4, new TreeNode(5), new TreeNode(6))


// const levelorderTraversal = (root) => {
//     const queue = []
//     const res = []
//     queue.push(root)
//     if (!queue.length) return []
//     while (queue.length) {
//         let len = queue.length
//         const curLayer = []
//         while (len--) {
//             const curNode = queue.shift()
//             curLayer.push(curNode.val)
//             curNode.left && queue.push(curNode.left)
//             curNode.right && queue.push(curNode.right)
//         }

//         res.push(curLayer)
//     }
//     return res

// }

// const preorderTraversal = (root) => {
//     if (root === null) return []
//     const res = []
//     const stack = []
//     stack.push(root)
//     while (stack.length) {
//         const curNode = stack.pop()
//         res.push(curNode.val)
//         if (curNode.right) stack.push(curNode.right)
//         if (curNode.left) stack.push(curNode.left)
//     }
//     return res
// }

// const inorderTraversal = (root) => {
//     const stack = []
//     const res = []
//     let cur = root
//     while (stack.length || cur) {
//         if (cur) {
//             stack.push(cur)
//             cur = cur.left
//         }
//         else {
//             cur = stack.pop()
//             res.push(cur.val)
//             cur = cur.right
//         }
//     }
//     return res
// }

// const postorderTraversal = (root) => {
//     if (root === null) return []
//     const res = []
//     const stack = []
//     stack.push(root)
//     while (stack.length) {
//         const curNode = stack.pop()
//         res.push(curNode.val)
//         if (curNode.left) stack.push(curNode.left)
//         if (curNode.right) stack.push(curNode.right)
//     }
//     return res.reverse()
// }

// console.log(preorderTraversal(root))
// console.log(inorderTraversal(root))
// console.log(postorderTraversal(root))
// console.log(levelorderTraversal(root))
//前序遍历 [ 1, 2, 3, 4, 5, 6 ]
//中序遍历 [ 2, 1, 3, 5, 4, 6 ]
//后序遍历 [ 2, 5, 6, 4, 3, 1 ]
// const preorderTraversal = (root) => {
//     if (root === null) return []
//     const res = []
//     const traverse = (node) => {
//         if (node === null) return
//         res.push(node.val)
//         traverse(node.left)
//         traverse(node.right)
//     }
//     traverse(root)

//     return res
// }
// console.log(preorderTraversal(root))


// 递归
// function preorderTraversal(root: TreeNode | null): number[] {
//     const result: number[] = [];
//     function traverse(node: TreeNode | null): void {
//         if (!node) return;
//         result.push(node.val);
//         traverse(node.left);
//         traverse(node.right);
//     }
//     traverse(root);
//     return result;
// }



// invertTree 翻转二叉树
// const invertTree = (root) => {
//     if (!root) return null
//     [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
//     return root
// }
// console.log(invertTree(root))



// 二叉树最大深度
// const maxDepth = (root) => {
//     const getDepth = (node) => {
//         if (node === null) return 0

//         let leftDepth = getDepth(node.left)
//         let rightDepth = getDepth(node.right)

//         let depth = 1 + Math.max(leftDepth, rightDepth)
//         return depth
//     }

//     return getDepth(root)
// }

// console.log(maxDepth(root))




// 二叉树是否对称
// var isSymmetric = function (root) {
//     const compareNode = (left, right) => {
//         if (left === null && right === null) return true
//         if (left !== null && right === null) return false
//         if (left === null && right !== null) return false
//         if (left.val !== right.val) return false

//         return compareNode(left.left, right.right) && compareNode(left.right, right.left)
//     }
//     if (root === null) return true
//     return compareNode(root.left, root.right)
// }

// 二叉树直径
// 肆虐寒冰再次来临
// var diameterOfBinaryTree = function (root) {
//     let res = 0
//     const maxDepth = (root) => {
//         if (root === null) return 0
//         const leftDepth = maxDepth(root.left)
//         const rightDepth = maxDepth(root.right)
//         res = Math.max(res, leftDepth + rightDepth)
//         return 1 + Math.max(leftDepth, rightDepth)
//     }
//     maxDepth(root)
//     return res
// }

// console.log(diameterOfBinaryTree(root))


// 二叉树层序遍历 使用辅助队列! 丝滑写出这一块!!!
var levelOrder = function (root) {
    const res = []
    const helpQueue = []
    if (root === null) return []
    helpQueue.push(root)
    while (helpQueue.length) {
        const currLevel = []
        let len = helpQueue.length
        while (len--) {
            const node = helpQueue.shift()
            currLevel.push(node.val)
            node.left && helpQueue.push(node.left)
            node.right && helpQueue.push(node.right)
        }
        res.push(currLevel)
    }
    return res
}
console.log(levelOrder(root))









