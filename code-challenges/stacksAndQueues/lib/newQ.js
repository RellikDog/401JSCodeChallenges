'use strict';
const Node = require('./newNode');

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.front){
            this.front = newNode;
            this.rear = newNode;
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

}

module.exports = Queue;