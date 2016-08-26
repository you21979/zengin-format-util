'use strict'
var fs = require('fs');
var Spec = require('./spec');
var zenginSerializer = require('./zengin_serializer');
var util = require('./util');

var receivedPaymentDetail = exports.receivedPaymentDetail = function(file, data){
    var size = getSizeOfSpec(Spec.FORMAT_RECEIVED_PAYMENTS_DETAIL, data);
    var bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.buff)
}

var depositsAndWithdrawalsDetail = exports.depositsAndWithdrawalsDetail = function(file, data){
    var size = getSizeOfSpec(Spec.FORMAT_WITHDRAWAL_DETAIL, data);
    var bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.buff)
}

var getSizeOfSpec = function(detail, data){
    return Object.keys(detail).map(function(k){
        return [k, detail[k].reduce(function(r,v){ return r + v}, 0)]
    }).reduce(function(r,v){
        return (v[1] * data[v[0]].length) + r
    }, 0)
}

var convertSJIS = function(result){
    var r = {}
    Object.keys(result).forEach(function(key){
        r[key] = result[key].map(function(v){
            return v.map(function(v){
                return util.tojis(v)
            })
        })
    })
    return r
}

var writeFile = function(file, data){
    return fs.writeFileSync(file, data, 'binary');
}
