const zengin = require("..")
const fs = require('fs')

try{
    const res = zengin.read.readFile(process.argv.slice(2)[0])
    fs.writeFileSync("./decode.txt", JSON.stringify(res, null, 2), "utf8")
}catch(e){
    console.log(e.message)
    console.log(e.debug.map( v => zengin.util.fromjis(v) ))
}


