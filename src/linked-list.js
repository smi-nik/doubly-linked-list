const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        this.length++;

        if (!this._head) {
            const node = new Node(data);
            this._head = node;    
            this._tail = node;
        } else {
            const node = new Node(data, this._tail);
            this._tail.next = node;
            this._tail = node;
        }

        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        let element = this._head;

        for (let i = 0; index > i; i++) {
            element = element.next;
        }

        return element.data;
    }

    insertAt(index, data) {
        let element = this._head;

        this.length++;

        for (let i = 0; index > i; i++) {
            element = element.next;
        }

        if (element && element.prev) {
            const node = new Node(data, element.prev, element);
            element.prev.next = node;
            element.prev = node;
        } else {
            const node = new Node(data, null, element);
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let element = this._head;

        this.length--;

        for (let i = 0; index > i; i++) {
            element = element.next;
        }

        if (element.prev) {
            element.prev.next = element.next;
        }

        if (element.next) {
            element.next.prev = element.prev;
        }

        return this;
    }

    reverse() {
        let element = this._head;

        for (let i = 0; i < this.length; i++) {
            [element.next, element.prev] = [element.prev, element.next];
            element = element.prev;
        }

        [this._tail, this._head] = [this._head, this._tail];

        return this;
    }

    indexOf(data) {
        let element = this._head;

        for (let i = 0; i < this.length; i++) {
            if (element.data === data) {
                return i;
            }
            element = element.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
