'use strict'
var fs = require('fs');
var Iconv = require('iconv').Iconv;
var Spec = require('./spec');
var zenginSerializer = require('./zengin_serializer');
var iconvUTF8 = new Iconv('UTF-8//TRANSLIT//IGNORE', 'SHIFT_JIS');

var receivedPaymentDetail = exports.receivedPaymentDetail = function(file, data){
    var size = getSizeOfSpec(Spec.FORMAT_RECEIVED_PAYMENTS_DETAIL, data);
    var bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.toString())
}

var depositsAndWithdrawalsDetail = exports.depositsAndWithdrawalsDetail = function(file, data){
    var size = getSizeOfSpec(Spec.FORMAT_DEPOSITS_AND_WITHDRAWALS_DETAIL, data);
    var bw = zenginSerializer(convertSJIS(data), size)
    return writeFile(file, bw.toString())
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
                return iconvUTF8.convert(v).toString()
            })
        })
    })
    return r
}

var writeFile = function(file, data){
    return fs.writeFileSync(file, data, 'binary');
}
