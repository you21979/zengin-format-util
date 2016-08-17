'use strict'
var DATA_TYPE = exports.DATA_TYPE = Object.freeze({
    HEADER : '1',
    DATA : '2',
    TRAILER : '8',
    END : '9',
})

var CODE_TYPE = exports.CODE_TYPE = Object.freeze({
    JIS : '0',
    EBCDIC : '1',
})

var FORMAT_TYPE = exports.FORMAT_TYPE = Object.freeze({
    RECEIVED_PAYMENTS_DETAIL : '01',
    DEPOSITS_AND_WITHDRAWALS_DETAIL : '03',
    COMPREHENSIVE_TRANSFER : '21',
    TRANSFER_PAYMENT_SALARY : '11',
    TRANSFER_PAYMENT_BONUS : '12',
})

var FORMAT_RECEIVED_PAYMENTS_DETAIL = exports.FORMAT_RECEIVED_PAYMENTS_DETAIL = Object.freeze({
    '1' : [1,2,1,6,6,6,4,15,3,15,1,7,40,93],
    '2' : [1,6,6,6,10,10,10,48,15,15,1,20,52],
    '8' : [1,6,12,6,10,165],
    '9' : [1,199],
})

var FORMAT_DEPOSITS_AND_WITHDRAWALS_DETAIL = exports.FORMAT_DEPOSITS_AND_WITHDRAWALS_DETAIL = Object.freeze({
    '1' : [1,2,1,6,6,6,4,15,3,15,3,1,10,40,1,1,14,71],
    '2' : [1,8,6,6,1,2,12,12,6,6,1,7,3,10,48,15,15,20,20,1],
    '8' : [1,6,13,6,13,1,14,7,139],
    '9' : [1,10,5,184],
})

