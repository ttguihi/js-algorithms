class Node {
    constructor(key = 0, value = 0) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.keyToNode = new Map()
        this.dummyNode = new Node()
        this.dummyNode.next = this.dummyNode
        this.dummyNode.prev = this.dummyNode
    }
    #getNode(key) {
        if (!this.keyToNode.has(key)) return null
        const node = this.keyToNode.get(key)
        this.#remove(node)
        this.#pushFront(node)
        return node
    }

    #remove(node) {
        node.next.prev = node.prev
        node.prev.next = node.next
    }

    #pushFront(node) {
        node.next = this.dummyNode.next
        node.prev = this.dummyNode
        node.prev.next = node
        node.next.prev = node
    }

    get(key) {
        const node = this.#getNode(key)
        return node ? node.value : -1
    }

    put(key, value) {
        let node = this.#getNode(key)
        if (node) {
            node.value = value
            return
        }
        node = new Node(key, value)
        this.#pushFront(node)
        this.keyToNode.set(key, node)
        if (this.capacity < this.keyToNode.size) {
            const backNode = this.dummyNode.prev
            this.keyToNode.delete(backNode.key)
            this.#remove(backNode)
        }
    }
}