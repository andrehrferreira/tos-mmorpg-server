export class ListNode <T> {
    public data: T;
    public next: ListNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    private head: ListNode<T> | null = null;

    public append(data: T): void {
        const newNode = new ListNode(data);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) 
                current = current.next;
            
            current.next = newNode;
        }
    }

    public prepend(data: T): void {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    public remove(data: T): void {
        if (!this.head) 
            return;
        
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next && current.next.data !== data) 
            current = current.next;
        
        if (current.next && current.next.data === data) 
            current.next = current.next.next;
    }
}