'use strict'
var fs = require('fs');
var zenginParser = require('./zengin_parser');
var util = require('./util');

var readFile = function(file, tbl){
    return zenginParser(fs.readFileSync(file));
}

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

var read = exports.read = function(file){
    var result = readFile(file)
    return convertUTF8(result);
}

