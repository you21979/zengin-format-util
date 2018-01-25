'use strict'
const Spec = require('./spec');
const BufferReader = require('./buffer_reader');

const parseFormat = (br, format) => format.map((n) => br.read(n) )


const initialize = () => {
    const result = {};
    Object.keys(Spec.DATA_TYPE).forEach((k) => { result[Spec.DATA_TYPE[k]] = [] })
    return result;
}

const parser = module.exports = (buff) => {
    const result = initialize();
    const br = new BufferReader(buff);
    const parseType = br.touch(1, 2).toString();
    const tbl = Spec.FORMAT_DISPATCH[parseType]
    let count = 1;
    while(!br.isEnd()){
        const recodeType = br.touch(0, 1).toString();
        if( recodeType in result ){
            result[recodeType].push( parseFormat(br, tbl[recodeType]) )
        }else{
            const work = result[2]
            const lastdata = work[work.length -1]
            const msg = "unknown recodeType:[" + recodeType + "] line:" + count
            const e = new Error(msg)
            e.debug = lastdata
            throw e
        }
        count++;
    }
    return result
}

