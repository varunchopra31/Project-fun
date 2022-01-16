// not working correctly!!
// in progress

class Node {
    constructor(element) {
        this.data = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0,
            this.head = null
    }

    add = element => {
        const node = new Node(element)

        if (this.size === 0) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
        console.log('-----------------------');
        console.log(`Added element ${element}`);
        console.log('-----------------------');
    }

    showList = () => {
        let current = this.head
        console.log('-----------LINKED LIST-----------')
        console.log('size of the list:', this.size);
        while (current.next) {
            console.log('element:', { data: current.data, next: current.next });
            current = current.next
        }
        console.log('element:', { data: current.data, next: current.next });
        console.log('-----------------------');
    }

    removeNode = (prev, current) => {
        prev.next = current.next
    }

    removeByIndex = index => {
        if (index > this.size) {
            console.log('Index greater than the size of the list');
        } else if (index === this.size) {
            this.size--
            this.head = null
        } else {
            let current = this.head
            let i = 1
            while (current.next) {
                if (1 === index) {
                    // first element
                    this.head = current.next
                    break
                } else if (index === this.size && index === i - 1) {
                    // last element
                    current.next = null
                } else {
                    if (i + 1 === index) {
                        this.removeNode(current, current.next)
                        break
                    }
                }
                current = current.next
                i++
            }
            this.size--
        }
        console.log('-----------------------');
        console.log(`Removed element from ${index} index`);
        console.log('-----------------------');
    }
}


const ll = new LinkedList()

console.log('-----------START OF THE CODE------------');
ll.add(10)
ll.add(20)
ll.add(30)
ll.add(40)
ll.add(50)
ll.showList()
ll.removeByIndex(5)
// ll.removeByIndex(4)
// ll.removeByIndex(3)
// ll.removeByIndex(2)
// ll.removeByIndex(1)
ll.showList()
console.log('-----------END OF THE CODE------------');