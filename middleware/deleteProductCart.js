const fs = require("fs")

function deleteProductCart(req,res,next){
    const {id} = req.params
    const {cart} = res.locals
    const newCart = cart.filter(elem=>elem.id != id)
    fs.promises.unlink("./db/cart.json")
    fs.promises.writeFile("./db/cart.json", JSON.stringify(newCart))
    next()
}

module.exports = deleteProductCart