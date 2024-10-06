
function findProduct(req,res,next){
    const {products} = res.locals
    const product = products.find(elem=>elem.id == +req.body.id+1)
    res.locals.product = product
    next()
}
module.exports = findProduct