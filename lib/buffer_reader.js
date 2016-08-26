'use strict'
var BufferReader = module.exports = function(buff){
    this.buff = buff
    this.pos = 0;
}
BufferReader.prototype.read = function(size){
    var data = this.buff.slice(this.pos, this.pos + size)
    this.pos += size;
    return data
}
BufferReader.prototype.touch = function(offset, size){
    return this.buff.slice(this.pos + offset, this.pos + offset + size)
}
BufferReader.prototype.len = function(){
    return this.buff.length
}
BufferReader.prototype.isEnd = function(){
    return this.buff.length <= this.pos
}
