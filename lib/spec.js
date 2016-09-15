'use strict'
var CODE_TYPE = exports.CODE_TYPE = Object.freeze({
    JIS : '0',
    EBCDIC : '1',
})

var FORMAT_TYPE = exports.FORMAT_TYPE = Object.freeze({
    DEPOSIT_DETAIL : '01', // 振込入金明細
    WITHDRAWAL_DETAIL : '03',  // 入出金明細
    BULK_TRANSFER : '21', // 総合振込
    TRANSFER_PAYMENT_SALARY : '11',
    TRANSFER_PAYMENT_BONUS : '12',
})

var DATA_TYPE = exports.DATA_TYPE = Object.freeze({
    HEADER : '1',
    DATA : '2',
    TRAILER : '8',
    END : '9',
})

var FORMAT_DEPOSIT_DETAIL = exports.FORMAT_DEPOSIT_DETAIL = Object.freeze({
    '1' : [1,2,1,6,6,6,4,15,3,15,1,7,40,93],
    '2' : [1,6,6,6,10,10,10,48,15,15,1,20,52],
    '8' : [1,6,12,6,10,165],
    '9' : [1,199],
})

var FORMAT_WITHDRAWAL_DETAIL = exports.FORMAT_WITHDRAWAL_DETAIL = Object.freeze({
    '1' : [1,2,1,6,6,6,4,15,3,15,3,1,10,40,1,1,14,71],
    '2' : [1,8,6,6,1,2,12,12,6,6,1,7,3,10,48,15,15,20,20,1],
    '8' : [1,6,13,6,13,1,14,7,139],
    '9' : [1,10,5,184],
})

var FORMAT_BULK_TRANSFER = exports.FORMAT_BULK_TRANSFER = Object.freeze({
    '1' : [1,2,1,10,40,4,4,15,3,15,1,7,17],
    '2' : [1,4,15,3,15,4,1,7,30,10,1,20,1,1,7],
    '8' : [1,6,12,101],
    '9' : [1,119],
})

var FORMAP_DISPATCH = exports.FORMAT_DISPATCH = {
    '01' : FORMAT_DEPOSIT_DETAIL,
    '03' : FORMAT_WITHDRAWAL_DETAIL,
    '21' : FORMAT_BULK_TRANSFER,
}


