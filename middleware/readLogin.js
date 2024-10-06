const fs = require("fs")

function readUser(req,res,next){
    fs.promises.readFile("./db/user.json", "utf-8")
    .then(data=>{
        if(data) res.locals.login = true
        else res.locals.login = false

        next()
    })
}
module.exports = readUser