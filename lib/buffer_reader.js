'use strict'
class BufferReader{
    constructor(buff){
        this.buff = buff
        this.pos = 0;
    }
    read(size){
        const data = this.buff.slice(this.pos, this.pos + size)
        this.pos += size;
        return data
    }
    touch(offset, size){
        return this.buff.slice(this.pos + offset, this.pos + offset + size)
    }
    len(){
        return this.buff.length
    }
    isEnd(){
        return this.buff.length <= this.pos
    }
}

module.exports = BufferReader
