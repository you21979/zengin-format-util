'use strict'
var assert = require('assert');
var BufferWriter = module.exports = function(size){
    this.buff = new Buffer(size); 
    this.pos = 0;
}
BufferWriter.prototype.fill = function(val){
    this.buff.fill(val, 0, this.buff.length)
}
BufferWriter.prototype.incOffset = function(pos){
    this.pos += pos;
    return this.pos 
}
BufferWriter.prototype.write = function(val){
    var size = val.length
    var len = this.buff.write(val, this.pos, size, 'binary')
    this.pos += size;
    assert(len === size, 'buffer over run')
    return len
}
BufferWriter.prototype.len = function(){
    return this.buff.length
}
BufferWriter.prototype.isEnd = function(){
    return this.buff.length <= this.pos
}
