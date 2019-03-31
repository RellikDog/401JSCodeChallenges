'use strict';

const Node = require('./../lib/newNode');
const LinkedList = require('./../lib/linkedList');
const mergeLL = require('./../ll-merge');

describe('make stuff', () =>{
    test('a node', ()=>{
        expect(new Node(69)).toEqual({ value: 69, next: null });
    });
    test('a ll', () => {
        expect(new LinkedList()).toEqual({ head: null });
    });
});

describe('mergeLL tests', () => {
    let LLOne = new LinkedList();
    LLOne.insertAtTail('a');
    LLOne.insertAtTail('b');
    LLOne.insertAtTail('c');
    let LLTwo = new LinkedList();
    LLTwo.insertAtTail('1');
    LLTwo.insertAtTail('2');
    LLTwo.insertAtTail('3');
    mergeLL(LLOne, LLTwo);
    test('when the linked lists are of equal lengths', () => {
        expect(LLOne.head.next.value).toEqual('1');
        expect(LLOne.head.next.next.value).toEqual('b');
        expect(LLOne.head.next.next.next.value).toEqual('2');
    });
});