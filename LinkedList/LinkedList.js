class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = new LinkedNode(null)
        this.length = 0
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds")
        }
        const newNode = new LinkedNode(value)
        let prev = this.head
        for (let i = 0; i < index; i++) {
            prev = prev.next;
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
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds")
        }
        let prev = this.head
        while (index--) {
            prev = prev.next
        }
        const delNode = prev.next
        prev.next = delNode.next
        delNode.next = null
        this.length--
        return delNode.value
    }

    print() {
        let result = ''
        let current = this.head

        while (current) {
            result += current.value + ' -> '
            current = current.next
        }

        // 去掉最后的 " -> "
        if (result.length > 0) {
            result = result.slice(0, -4)
        }

        console.log(result || 'Empty List')
    }
    //head -> 1   2 -> 4 -> 8 -> 9

    //head -> 1 <- 2    4 -> 8 -> 0
    reverse() {
        let prev = null
        let curr = this.head  // 这里改成 this.head
        while (curr) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        this.head = prev
        return this
    }
}

const myLinkedList = new LinkedList()

myLinkedList.addLast(1)
myLinkedList.addLast(2)
myLinkedList.addLast(4)
myLinkedList.addLast(8)
myLinkedList.addLast(9)
myLinkedList.reverse()
// myLinkedList.delete(4)
myLinkedList.print()


