'use strict'
const fs = require('fs');
const Spec = require('./spec');
const zenginSerializer = require('./zengin_serializer');
const util = require('./util');

const receivedPaymentDetail = exports.receivedPaymentDetail = (file, data) => {
    const size = getSizeOfSpec(Spec.FORMAT_DEPOSIT_DETAIL, data);
    const bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.buff)
}

const depositsAndWithdrawalsDetail = exports.depositsAndWithdrawalsDetail = (file, data) => {
    const size = getSizeOfSpec(Spec.FORMAT_WITHDRAWAL_DETAIL, data);
    const bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.buff)
}

const bulkTransfer = exports.bulkTransfer = (file, data) => {
    const size = getSizeOfSpec(Spec.FORMAT_BULK_TRANSFER, data);
    const bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.buff)
}

const getSizeOfSpec = (detail, data) => {
    return Object.keys(detail).map((k) => {
        return [k, detail[k].reduce((r,v) => { return r + v}, 0)]
    }).reduce((r,v) => {
        return (v[1] * data[v[0]].length) + r
    }, 0)
}

const convertSJIS = (result) => {
    const r = {}
    Object.keys(result).forEach((key) => {
        r[key] = result[key].map((v) => {
            return v.map((v) => util.tojis(v) )
        })
    })
    return r
}

const writeFile = (file, data) => {
    return fs.writeFileSync(file, data, 'binary');
}
