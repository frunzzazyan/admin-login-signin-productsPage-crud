const fs = require("fs")

function addProducts(req,res,next){
    const {newProduct, products} = res.locals
    products.push(newProduct)
    fs.promises.unlink("./db/products.json")
    fs.promises.writeFile("./db/products.json", JSON.stringify(products))
    next()
}

module.exports = addProducts