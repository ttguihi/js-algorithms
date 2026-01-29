class Node {
    constructor(key = 0, value = 0) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.dummy = new Node(); // 哨兵节点
        this.dummy.prev = this.dummy;
        this.dummy.next = this.dummy;
        this.keyToNode = new Map();
    }

    // 获取 key 对应的节点，同时把该节点移到链表头部
    #getNode(key) {
        if (!this.keyToNode.has(key)) { // 没有这本书
            return null;
        }
        const node = this.keyToNode.get(key); // 有这本书
        this.#remove(node); // 把这本书抽出来
        this.#pushFront(node); // 放到最上面
        return node;
    }

    get(key) {
        const node = this.#getNode(key); // getNode 会把对应节点移到链表头部
        return node ? node.value : -1;
    }

    put(key, value) {
        let node = this.#getNode(key); // getNode 会把对应节点移到链表头部
        if (node) { // 有这本书
            node.value = value; // 更新 value
            return;
        }
        node = new Node(key, value) // 新书
        this.keyToNode.set(key, node);
        this.#pushFront(node); // 放到最上面
        if (this.keyToNode.size > this.capacity) { // 书太多了
            const backNode = this.dummy.prev;
            this.keyToNode.delete(backNode.key);
            this.#remove(backNode); // 去掉最后一本书
        }
    }

    // 删除一个节点（抽出一本书）
    #remove(x) {
        x.prev.next = x.next;
        x.next.prev = x.prev;
    }

    // 在链表头添加一个节点（把一本书放到最上面）
    #pushFront(x) {
        x.prev = this.dummy;
        x.next = this.dummy.next;
        x.prev.next = x;
        x.next.prev = x;
    }
}

// 创建容量为2的LRU缓存
const cache = new LRUCache(2);

// 存入数据
cache.put(1, "苹果");
cache.put(2, "香蕉");

// 获取数据
console.log(cache.get(1));    // 输出: "苹果"
console.log(cache.get(2));    // 输出: "香蕉"
console.log(cache.get(3));    // 输出: -1 (key不存在)

// 当容量超过时，淘汰最久未使用的
cache.put(3, "橙子");  // 加入第三个元素，淘汰key=1
console.log(cache.get(1));    // 输出: -1 (已被淘汰)
console.log(cache.get(2));    // 输出: "香蕉" (还在缓存中)
console.log(cache.get(3));    // 输出: "橙子"

// 再次获取key=2，使其变为最近使用
console.log(cache.get(2));    // 输出: "香蕉" (变为最近使用的)

cache.put(4, "葡萄");  // 加入第四个元素，淘汰key=3
console.log(cache.get(3));    // 输出: -1 (已被淘汰)
console.log(cache.get(2));    // 输出: "香蕉" (还在缓存中)
console.log(cache.get(4));    // 输出: "葡萄"