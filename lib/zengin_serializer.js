'use strict'
const Spec = require('./spec');
const BufferWriter = require('./buffer_writer');

const serializeFormat = (bw) => (list) => {
        list.forEach((v) => {
            bw.write(v)
        })
    }

const serializer = module.exports = (data, size) => {
    const bw = new BufferWriter(size);
    bw.fill(' ')
    data[Spec.DATA_TYPE.HEADER].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.DATA].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.TRAILER].forEach(serializeFormat(bw))
    data[Spec.DATA_TYPE.END].forEach(serializeFormat(bw))
    return bw
}

