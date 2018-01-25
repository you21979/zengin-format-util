'use strict'
const fs = require('fs');
const zenginParser = require('./zengin_parser');
const util = require('./util');

const convertUTF8 = (result) => {
    const r = {}
    Object.keys(result).forEach((key) => {
        r[key] = result[key].map((v) => {
            return v.map((v) => util.fromjis(v) )
        })
    })
    return r
}

const readFile = exports.readFile = (file) => {
    const result = zenginParser(fs.readFileSync(file));
    return convertUTF8(result);
}

const readBuff = exports.readBuff = (buff) => {
    const result = zenginParser(buff);
    return convertUTF8(result);
}

