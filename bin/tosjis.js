const zengin = require("..")
const fs = require('fs')

const crlf = (x) => {
    return x.split("\r\n").join('').split("\n").join("")
}

const res = zengin.util.tojis(crlf(fs.readFileSync(process.argv.slice(2)[0], "utf8")))
fs.writeFileSync("./sjisfile", res, "binary")


