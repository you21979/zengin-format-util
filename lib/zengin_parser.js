'use strict'
var Spec = require('./spec');
var BufferReader = require('./buffer_reader');

var parseFormat = function(br, format){
    return format.map(function(n){ return br.read(n) })
}

var initialize = function(){
    var result = {};
    Object.keys(Spec.DATA_TYPE).forEach(function(k){ result[Spec.DATA_TYPE[k]] = [] })
    return result;
}

var parser = module.exports = function(buff, tbl){
    var result = initialize();
    var br = new BufferReader(buff);
    while(!br.isEnd()){
        var formatType = br.touch(1).toString();
        result[formatType].push( parseFormat(br, tbl[formatType]) )
    }
    return result
}

