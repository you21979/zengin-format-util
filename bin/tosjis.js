const zengin = require("..")
const fs = require('fs')

const res = zengin.util.tojis(fs.readFileSync(process.argv.slice(2)[0]))
fs.writeFileSync("./sjisfile", res, "binary")


