class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = new ListNode(null)
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index Error!")
        }
        const newNode = new ListNode(value)
        let prev = this.head
        while (index--) {
            prev = prev.next
        }
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return this
    }

    addLast(value) {
        return this.insert(this.length, value)
    }

    addFirst(value) {
        return this.insert(0, value)
    }

    delete(index) {
        if (index < 0 || index >= this.length) throw new Error("Index Error!")
        let prev = this.head
        while (index--) {
            prev = prev.next
        }
        const curr = prev.next
        prev.next = curr.next
        curr.next = null
        this.length--
        return curr.value
    }

    reverse() {
        if (this.length === 0) return
        let prev = null
        let curr = this.head.next
        while (curr !== null) {
            const after = curr.next
            curr.next = prev
            prev = curr
            curr = after
        }
        this.head.next = prev
    }

    print() {
        if (this.length === 0) {
            console.log('null')
            return
        }

        let result = ''
        let curr = this.head.next
        while (curr !== null) {
            if (curr.next === null) {
                result += `${curr.value}`
            } else {
                result += `${curr.value} -> `
            }
            curr = curr.next
        }
        console.log(result)
    }

    linkedListToArray() {
        let cur = this.head.next
        const array = []
        while (cur !== null) {
            array.push(cur.value)
            cur = cur.next
        }
        return array
    }

    //快慢指针找到中间节点
    middleNode() {
        let slow = this.head.next
        let fast = this.head.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
}

const myLinkedList = new LinkedList()

myLinkedList.addLast(1)
myLinkedList.addLast(2)
myLinkedList.addLast(3)
myLinkedList.addLast(2)
myLinkedList.addLast(1)
// myLinkedList.addLast(5)
const node = myLinkedList.middleNode()
console.log(node)
myLinkedList.print()




// const isPalindrome = (head) => {
//     if (head.next === null) return true
//     const temp = myLinkedList
//     temp.print()
//     myLinkedList.reverse()

//     return myLinkedList.reverse() === temp

// }

// console.log(isPalindrome(myLinkedList.head.next))


// myLinkedList.print()
// myLinkedList.reverse()
// myLinkedList.print()

const isPalindrome = () => {
    const arr = myLinkedList.linkedListToArray()
    console.log(arr)
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        if (arr[l] !== arr[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

console.log(isPalindrome())