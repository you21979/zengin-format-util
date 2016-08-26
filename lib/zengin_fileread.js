'use strict'
var fs = require('fs');
var zenginParser = require('./zengin_parser');
var util = require('./util');

var convertUTF8 = function(result){
    var r = {}
    Object.keys(result).forEach(function(key){
        r[key] = result[key].map(function(v){
            return v.map(function(v){
                return util.fromjis(v)
            })
        })
    })
    return r
}

var readFile = exports.readFile = function(file){
    var result = zenginParser(fs.readFileSync(file));
    return convertUTF8(result);
}

var readBuff = exports.readBuff = function(buff){
    var result = zenginParser(buff);
    return convertUTF8(result);
}

