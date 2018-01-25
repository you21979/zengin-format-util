const zengin = require("..")
const fs = require('fs')

try{
    const data = JSON.parse(fs.readFileSync(process.argv.slice(2)[0], "utf8"))
    zengin.write.bulkTransfer("./encode", data)
}catch(e){
    console.log(e.message)
    console.log(e.debug.map( v => zengin.util.fromjis(v) ))
}


