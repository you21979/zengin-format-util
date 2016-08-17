'use strict'
var Spec = require('./spec');
var BufferWriter = require('./buffer_writer');

var serializeFormat = function(bw){
    return function(list){
        list.forEach(function(v){
            bw.write(v)
        })
    }
}

var serializer = module.exports = function(data, size){
    var bw = new BufferWriter(size);
    bw.fill(' ')
    data[Spec.DATA_TYPE.HEADER].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.DATA].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.TRAILER].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.END].forEach(serializeFormat(bw))
    return bw
}

