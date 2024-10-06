const fs = require("fs")
function addCart(req,res,next){
    const {cart,product} = res.locals
    const dublProduct = cart.find(elem=>elem.id == product.id)
    if(!dublProduct){
        cart.push(product)
    }

    fs.promises.writeFile("./db/cart.json", JSON.stringify(cart))
    next()
}
module.exports = addCart