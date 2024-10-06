function checkBody(req,res,next){
    const body = req.body
    if("title" in body && "description" in body && "category" in body && "price" in body && "image" in body){
        const newProduct = {
            id: Math.round(Math.random()*10000) ,
            title: body.title,
            description: body.description,
            category: body.category,
            price: body.price,
            image: body.image,
            rating: {
                rate: '',
                count: ''
            }
        }
        res.locals.newProduct = newProduct
        next()
    }else{
        res.json({"msg" : "invalid data"})
    }
}

module.exports = checkBody