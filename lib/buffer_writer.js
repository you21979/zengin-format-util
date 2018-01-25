'use strict'
const assert = require('assert');
class BufferWriter{
    constructor(size){
        this.buff = new Buffer(size); 
        this.pos = 0;
    }
    fill(val){
        this.buff.fill(val, 0, this.buff.length)
    }
    incOffset(pos){
        this.pos += pos;
        return this.pos 
    }
    write(val){
        var size = val.length
        var len = this.buff.write(val, this.pos, size, 'binary')
        this.pos += size;
        assert(len === size, 'buffer over run')
        return len
    }
    len(){
        return this.buff.length
    }
    isEnd(){
        return this.buff.length <= this.pos
    }
}   

module.exports = BufferWriter
