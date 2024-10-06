const express = require("express");
const checkAdmin = require("../middleware/checkAdmin");
const checkBody = require("../middleware/checkBody");
const addProducts = require("../middleware/addProducts");
const readProducts = require("../middleware/readProducts.js")

const fs = require("fs")

const router = express.Router()

router.get("/", checkAdmin, (req,res)=>{
    if(res.locals.admin){
        const {products} = res.locals
        res.render("admin" , {products})
    }else{
        res.render("errorPage")
    }
})

router.post("/", [checkBody, addProducts] ,(req,res)=>{
    res.redirect("/")
})

router.delete("/:id", readProducts , (req,res)=>{
    const {products} = res.locals
    const {id} = req.params
    const newProduct = products.filter(elem=>elem.id != id)
    fs.promises.unlink("./db/products.json")
    fs.promises.writeFile("./db/products.json", JSON.stringify(newProduct))
})

module.exports = router;