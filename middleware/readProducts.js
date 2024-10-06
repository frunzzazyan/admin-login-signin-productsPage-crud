const fs = require("fs")

function readProducts(req,res,next){
    fs.promises.readFile("./db/products.json", "utf-8")
    .then(data=>{
        res.locals.products = JSON.parse(data)
        next()
    })
}

module.exports = readProducts