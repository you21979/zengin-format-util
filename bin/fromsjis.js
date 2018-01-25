const zengin = require("..")
const fs = require('fs')

const res = zengin.util.fromjis(fs.readFileSync(process.argv.slice(2)[0]))
console.log(res)


