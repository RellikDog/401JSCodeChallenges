'use strict';

const Node = require('./lib/newNode');
const LinkedList = require('./lib/linkedList');

function mergeLL(ll1, ll2){
    let ll1Cur = ll1.head;
    let ll2Cur = ll2.head;
    while(ll1Cur && ll2Cur){
        let ref = ll1Cur.next;
        let ref2 = ll2Cur.next;
        ll1Cur.next = ll2Cur;
        ll2Cur.next = ref;
        ll1Cur = ref;
        ll2Cur = ref2;
    }
}

module.exports = mergeLL;