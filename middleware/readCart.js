const fs = require("fs")

function readCart(req,res,next){
    fs.promises.readFile("./db/cart.json", "utf-8")
    .then(data=>{
        res.locals.cart = JSON.parse(data)
        next()
    })
}
module.exports = readCart