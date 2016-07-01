'use strict'
var fs = require('fs');
var Iconv = require('iconv').Iconv;
var Spec = require('./spec');
var zenginParser = require('./zengin_parser');
var iconvSJIS = new Iconv('SHIFT_JIS', 'UTF-8//TRANSLIT//IGNORE');

var readFile = function(file, tbl){
    return zenginParser(fs.readFileSync(file), tbl);
}

var convertUTF8 = function(result){
    var r = {}
    Object.keys(result).forEach(function(key){
        r[key] = result[key].map(function(v){
            return v.map(function(v){
                return iconvSJIS.convert(v).toString()
            })
        })
    })
    return r
}

var receivedPaymentDetail = exports.receivedPaymentDetail = function(file){
    var result = readFile(file, Spec.FORMAT_RECEIVED_PAYMENTS_DETAIL)
    return convertUTF8(result);
}

var depositsAndWithdrawalsDetail = exports.depositsAndWithdrawalsDetail = function(file){
    var result = readFile(file, Spec.FORMAT_DEPOSITS_AND_WITHDRAWALS_DETAIL)
    return convertUTF8(result);
}
