const fs = require("fs")

function checkAdmin(req,res,next){
    fs.promises.readFile("./db/admin.json", "utf-8")
    .then(data=>{
        if(data) res.locals.admin = true
        else res.locals.admin = false

        next()
    })
}
module.exports = checkAdmin